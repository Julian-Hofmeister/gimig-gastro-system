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
  @Input() item;

  price: any;

  constructor() {}

  ngOnInit() {
    this.price = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'EUR',
    }).format(this.item.price);
  }
}
