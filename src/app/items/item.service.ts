import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Item } from './item.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  items: Observable<any[]>;

  itemCollection: AngularFirestoreCollection<Item>;

  // userEmail = JSON.parse(localStorage.getItem('user')).email;
  userEmail = 'julian@web.de';
  path = this.afs.collection('restaurants').doc(this.userEmail);

  constructor(
    public afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  // GET ITEMS
  getItems(id: string, hasFood: string) {
    const pathAttachment = hasFood == 'true' ? 'items-food' : 'items-beverages';

    console.log('Path: ' + pathAttachment);
    // GETS REFERENCE
    this.itemCollection = this.path.collection('/' + pathAttachment, (ref) =>
      ref.where('parentId', '==', id)
    );

    // GETS ITEMS
    this.items = this.itemCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data.id = a.payload.doc.id;
          console.log(data.id);
          return data;
        });
      })
    );
    return this.items;
  }
}
