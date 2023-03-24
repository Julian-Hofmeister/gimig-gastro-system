import {Injectable} from '@angular/core';
import {Category} from './category.model';
import {map} from 'rxjs/operators';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {AngularFireStorage} from '@angular/fire/storage';
import {Restaurant} from "../home/restaurant.model";

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  categories: Observable<any[]>;
  degasoCategories: any[] = [];

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;


  ipAddress = localStorage.getItem('ipAddress');

  restaurant = JSON.parse(localStorage.getItem('restaurant')) as Restaurant;


  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  getCategories(id: string, pathAttachment: string): Observable<Category[]> {
    const path = this.afs.collection('restaurants').doc(this.userEmail);

    const categoryCollection = path.collection(
      '/' + pathAttachment,
      (ref) => ref.where('parentId', '==', id).orderBy('name')
    );

    // TODO WHERE VISIBILITY IS TRUE

    this.categories = categoryCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((category) => {
          const data = category.payload.doc.data() as Category;
          data.id = category.payload.doc.id;

          data.imagePath = this.afStorage
            .ref(category.payload.doc.data().imagePath)
            .getDownloadURL();

          return data;
        });
      })
    );

    return this.categories;
  }

  // ----------------------------------------------------------------------------------------------

  getAllDegasoCategories(): Category[] {
    this.degasoCategories = [];

    fetch('http://' + this.ipAddress + ':3434/getAllCategorys/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {

        if (data != null) {

          data.sort((n1, n2) => n1.order - n2.order);
          for (const category of data) {


            try{
              category.imagePath = this.afStorage
                .ref('/' + this.restaurant.id + '/' + category._id).getDownloadURL();

            } catch (e) {
              console.log(e);
            }

            if (!this.degasoCategories.includes(category)) {
              this.degasoCategories.push(category);
            }
          }

          return this.degasoCategories;
        }
      });
    return this.degasoCategories;
  }
  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
