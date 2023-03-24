import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ModalController, ToastController} from '@ionic/angular';
import {ImageService} from '../image.service';

class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
})
export class ImageModalComponent implements OnInit {

  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() id: string;

  @Input() isItem: boolean;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////


  selectedFile: ImageSnippet;

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private router: Router,
    private modalCtrl: ModalController,
    private imageService: ImageService,
    private toastController: ToastController
  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    console.log(this.id);
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  closeModal() {
    this.modalCtrl.dismiss().then();
  }

  // ----------------------------------------------------------------------------------------------

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      console.log(file.size);

      if (file.size < 1333906) {
        this.selectedFile = new ImageSnippet(event.target.result, file);
      } else {
          this.presentToast( 'Die Datei ist zu groß. (' +
            file.name +
            'kb)\nDie maximale Dateigröße liegt bei 900kb.');
      }
    });

    reader.readAsDataURL(file);
  }

  // ----------------------------------------------------------------------------------------------

  uploadImage() {
    this.imageService.upload(this.selectedFile.file, this.id);
  }
  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position: 'bottom',
      color: 'dark',
    });

    await toast.present();
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

}
