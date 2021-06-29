import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { map } from 'rxjs/operators';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  // # OBSERVABLES
  categories: Observable<any[]>;

  // # LOCALSTORAGE VARIABLES
  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // # FIRESTORE REFERENCES
  path = this.afs.collection('restaurants').doc(this.userEmail);

  // # CONSTRUCTOR
  constructor(public afs: AngularFirestore) {}

  // # FUNCTIONS
  getCategories(id: string, pathAttachment: string) {
    const categoryCollection = this.path.collection(
      '/' + pathAttachment,
      (ref) => ref.where('parentId', '==', id)
      // .orderBy('id')
    );
    this.categories = categoryCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Category;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
    return this.categories;
  }
}
