import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { map } from 'rxjs/operators';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';
import {
  AngularFireStorage,
  AngularFireStorageReference,
  AngularFireUploadTask,
} from '@angular/fire/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: Observable<any[]>;

  categoryCollection: AngularFirestoreCollection<Category>;

  // userEmail = JSON.parse(localStorage.getItem('user')).email;
  userEmail = 'julian@web.de';
  path = this.afs.collection('restaurants').doc(this.userEmail);

  constructor(
    public afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  // GET CATEGORIES
  getCategories(id: string, pathAttachment: string) {
    // GETS REFERENCE
    this.categoryCollection = this.path.collection(
      '/' + pathAttachment,
      (ref) => ref.where('parentId', '==', id)
    );

    console.log(id);
    console.log(pathAttachment);

    // GETS CATEGORIES
    this.categories = this.categoryCollection.snapshotChanges().pipe(
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