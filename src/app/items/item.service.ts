import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Item } from './item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  // # OBSERVABLES
  items: Observable<any[]>;

  // # LOCALSTORAGE VARIABLES
  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  // # FIRESTORE REFERENCES
  path = this.afs.collection('restaurants').doc(this.userEmail);

  // # CONSTRUCTOR
  constructor(public afs: AngularFirestore) {}

  // # FUNCTIONS
  getItems(id: string, hasFood: string) {
    const pathAttachment = hasFood == 'true' ? 'items-food' : 'items-beverages';
    const itemCollection = this.path.collection('/' + pathAttachment, (ref) =>
      ref.where('parentId', '==', id).orderBy('name')
    );
    this.items = itemCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
    return this.items;
  }
}
