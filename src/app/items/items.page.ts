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
  id: string;
  hasFood: string;

  items: Item[];

  private streamSub: Subscription;

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private itemService: ItemService,
    private afStorage: AngularFireStorage
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      console.log(paramMap.get('id'));
      this.id = paramMap.get('id');
      this.hasFood = paramMap.get('hasFood');
    });

    // GET ITEMS
    this.streamSub = this.itemService
      .getItems(this.id, this.hasFood)
      .subscribe((items) => {
        // EMPTY LOCAL ITEMS
        this.items = [];

        // DEFINE NEW ITEM
        for (let item of items) {
          console.log(item.imagePath);
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

          // PUSH NEW ITEM
          if (fetchedItem.isVisible == true) {
            this.items.push(fetchedItem);
          }
        }
      });
  }

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
}
