import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-feedback-page',
  templateUrl: './feedback-page.page.html',
  styleUrls: ['./feedback-page.page.scss'],
})
export class FeedbackPagePage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  feedbackImage = localStorage.getItem('feedbackImage');
  feedbackQrCode = localStorage.getItem('feedbackQrCode');
  name = localStorage.getItem('name');

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private storage: AngularFireStorage) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit() {
    this.feedbackImage = await this.storage
      .ref(this.feedbackImage)
      .getDownloadURL()
      .toPromise();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
