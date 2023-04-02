import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Item } from './item.model';
import {AngularFireStorage} from '@angular/fire/storage';
import {Restaurant} from '../home/restaurant.model';
import {Option} from "./option.model";


@Injectable({
  providedIn: 'root',
})
export class ItemService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  items: Observable<any[]>;
  degasoItems: any[] = [];

  degasoCombiProducts: Option[] = [];

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  ipAddress = localStorage.getItem('ipAddress');


  restaurant = JSON.parse(localStorage.getItem('restaurant')) as Restaurant;

  // ----------------------------------------------------------------------------------------------


  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    public afs: AngularFirestore,
    private afStorage: AngularFireStorage
  ) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  getItems(id: string, hasFood: string) {
    const path = this.afs.collection('restaurants').doc(this.userEmail);

    const pathAttachment = hasFood === 'true' ? 'items-food' : 'items-beverages';

    const itemCollection = path.collection('/' + pathAttachment, (ref) =>
      ref.where('parentId', '==', id).orderBy('name')
    );

    this.items = itemCollection.snapshotChanges().pipe(
      map((changes) => {
        return changes.map((a) => {
          const data = a.payload.doc.data() as Item;
          data._id = a.payload.doc.id;

          return data;
        });
      })
    );

    return this.items;
  }

  // ----------------------------------------------------------------------------------------------
  getAllDegasoItems(category?: string): Item[] {
    this.degasoItems = [];


    this.getAllCombinationProducts();
    fetch('http://' + this.ipAddress + ':3434/getAllProducts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data != null) {

          data.sort((n1, n2) => n1.order - n2.order);


          for (const item of data) {
            item.imagePath = this.afStorage
              .ref('/' + this.restaurant.id + '/' + item._id).getDownloadURL();

            item.imageRef = '/' + this.restaurant.id + '/' + item._id;
            item.amount = 1;

            item.isVisible = item.active;


            item.combinableWith = [];
            for (const product of this.degasoCombiProducts) {
              for (const option of product.availableProducts) {
                if (option.productId === item._id) {
                  if (!item.combinableWith.includes(product)) {
                    item.combinableWith.push(product);
                  }
                }
              }
            }


            if (!item.showOnGimig || item.showOnGimig === true) {
              if (!this.degasoItems.includes(item)) {
                if (category) {
                  if (category === item.category) {
                    this.degasoItems.push(item);
                  }
                } else {
                  this.degasoItems.push(item);
                }
              }
            }
          }

          console.log(this.degasoItems);
          return this.degasoItems;

        }
      });
    return this.degasoItems;
  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private getAllCombinationProducts() {
    this.degasoCombiProducts = [];
    fetch('http://' + this.ipAddress + ':3434/getAllCombinationProducts/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(response => response.json())
      .then(data => {
        if (data != null) {
          for (const option of data) {
            if (option.active) {
              console.log("COMBI PRODUCT")
              console.log(option);
              this.degasoCombiProducts.push(option);
            }
          }
          console.log(this.degasoCombiProducts);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
