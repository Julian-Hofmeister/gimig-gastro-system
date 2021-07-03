import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { Item } from './item.model';
import { ItemService } from './item.service';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  private itemSub: Subscription;

  items: Item[];

  id: string;
  hasFood: string;
  isLoading = false;
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private itemService: ItemService,
    private afStorage: AngularFireStorage
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.getUrlData();

    this.fetchItemsFromFirestore();
  }

  ngOnDestroy() {
    this.itemSub.unsubscribe();
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////
  public onShowDetail(item: any) {
    this.modalCtrl
      .create({
        component: ItemDetailComponent,
        componentProps: { item: item },
        cssClass: 'item-detail-css',
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private getUrlData() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.id = paramMap.get('id');
      this.hasFood = paramMap.get('hasFood');
    });
  }

  private fetchItemsFromFirestore() {
    this.isLoading = true;
    this.itemSub = this.itemService
      .getItems(this.id, this.hasFood)
      .subscribe((items) => {
        this.items = [];

        // * DEFINE NEW ITEM
        for (let item of items) {
          const imagePath = this.afStorage.ref(item.imagePath).getDownloadURL();

          // const fetchedItem = new Item(
          //   item.name,
          //   item.description,
          //   item.price,
          //   imagePath,
          //   item.imagePath,
          //   item.isVisible,
          //   item.isFood,
          //   item.id,
          //   item.parentId
          // );

          const fetchedItem: Item = {
            name: item.name,
            description: item.description,
            price: item.price,

            imagePath: imagePath,
            imageRef: item.imagePath,
            isVisible: item.isVisible,
            isFood: item.isFood,
            id: item.id,
            parentId: item.parentId,
          };

          if (fetchedItem.isVisible) {
            this.items.push(fetchedItem);
          }
          this.isLoading = false;
        }
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
