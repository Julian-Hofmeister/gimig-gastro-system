import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';
import {Item} from './items/item.model';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {


  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////



  webSocket: WebSocket;

  // ----------------------------------------------------------------------------------------------
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor() {}

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////




  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
