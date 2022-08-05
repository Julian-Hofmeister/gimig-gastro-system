import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from './restaurant.model';

@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  restaurant: Observable<any>;

  userEmail = localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user')).email
    : null;

  path = this.afs.collection('restaurants').doc(this.userEmail);

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(public afs: AngularFirestore) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  getRestaurantData(): Observable<any> {
    this.restaurant = this.path.snapshotChanges().pipe(
      map((a) => {
        const data = a.payload.data() as Restaurant;
        data.id = a.payload.id;

        return data;
      })
    );

    return this.restaurant;
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
