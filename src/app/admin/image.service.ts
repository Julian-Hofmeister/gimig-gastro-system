import { Injectable } from '@angular/core';
import {AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask} from '@angular/fire/storage';
import {ToastController} from '@ionic/angular';
import {Restaurant} from '../home/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;


  restaurant = JSON.parse(localStorage.getItem('restaurant')) as Restaurant;

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private afStorage: AngularFireStorage, private toastController: ToastController) {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  upload(file: File, id: string) {
    this.ref = this.afStorage.ref('/' + this.restaurant.id + '/' + id);

    this.task = this.ref.put(file);

    console.log(this.ref);
  }


  // ----------------------------------------------------------------------------------------------


  // ----------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'bottom'
    });

    await toast.present();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
