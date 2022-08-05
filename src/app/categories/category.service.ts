import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  categories: Observable<any[]>;

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  path = this.afs.collection('restaurants').doc(this.userEmail);

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  getCategories(id: string, pathAttachment: string): Observable<Category[]> {
    const categoryCollection = this.path.collection(
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

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
