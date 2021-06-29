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
  // # SUBSCRITPIONS
  private streamSub: Subscription;

  // # LISTS
  items: Item[];

  // # PROPERTIES
  id: string;
  hasFood: string;
  isLoading = false;

  // # CONSTRUCTOR
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private itemService: ItemService,
    private afStorage: AngularFireStorage
  ) {}

  // # On INIT
  ngOnInit() {
    // * ACTIVATE LOADING INDICAtOR
    this.isLoading = true;

    // * GET URL DATA
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      this.id = paramMap.get('id');
      this.hasFood = paramMap.get('hasFood');
    });

    // * GET ITEMS
    this.streamSub = this.itemService
      .getItems(this.id, this.hasFood)
      .subscribe((items) => {
        this.items = [];

        // * DEFINE NEW ITEM
        for (let item of items) {
          const imagePath = this.afStorage.ref(item.imagePath).getDownloadURL();

          const fetchedItem = new Item(
            item.name,
            item.description,
            item.price,
            imagePath,
            item.imagePath,
            item.isVisible,
            item.isFood,
            item.id,
            item.parentId
          );

          if (fetchedItem.isVisible) {
            this.items.push(fetchedItem);
          }
          // * DEACTIVATE LOADING INDICAtOR
          this.isLoading = false;
        }
      });
  }

  // # FUNCTIONS
  onShowDetail(item: any) {
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

  // # ON DESTROY
  ngOnDestroy() {
    this.streamSub.unsubscribe();
  }
}
