import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from 'src/app/items/item.model';

@Component({
  selector: 'app-small-item-card',
  templateUrl: './small-item-card.component.html',
  styleUrls: ['./small-item-card.component.scss'],
})
export class SmallItemCardComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() item: Item;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor() {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.item.amount = 0;
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  @Output() onItemChanged = new EventEmitter<any>();

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  increaseAmountByOne() {
    if (this.item.amount < 25) {
      this.item.amount = this.item.amount + 1;
      this.onItemChanged.emit(this.item);
    }
  }

  // ----------------------------------------------------------------------------------------------

  decreaseAmountByOne() {
    if (this.item.amount > 0) {
      this.item.amount = this.item.amount - 1;
      this.onItemChanged.emit(this.item);
    }
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
