import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/items/item.model';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() item: Item;
  @Input() disabled = false;

  constructor() {}

  ngOnInit() {}

  deleteItem() {
    console.log('delete');
  }
}
