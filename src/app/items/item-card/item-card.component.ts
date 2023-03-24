import { Component, Input, OnInit } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Item } from '../item.model';
import {ImageModalComponent} from '../../admin/image-modal/image-modal.component';
import {ModalController} from '@ionic/angular';
import {EditService} from "../../admin/edit.service";

registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
    ]),
  ],
})
export class ItemCardComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() item: Item;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  price: any = '';

  blankImg = '/assets/images/grey.jpg';

  editMode: boolean;


  //#endregion

  constructor(private modalCtrl: ModalController, private editService: EditService) {
  }

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.price = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'EUR',
    }).format(Number(this.item.price));

    this.editMode = this.editService.getEditModeStatus();
  }

  //#endregion

}
