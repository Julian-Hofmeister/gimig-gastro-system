import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-card',
  templateUrl: './order-card.component.html',
  styleUrls: ['./order-card.component.scss'],
})
export class OrderCardComponent implements OnInit {
  @Input() item;

  constructor() {}

  ngOnInit() {}

  deleteItem() {
    console.log('delete');
  }
}
