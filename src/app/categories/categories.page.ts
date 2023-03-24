import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Category } from './category.model';
import {EditService} from '../admin/edit.service';
import {ItemService} from '../items/item.service';
import {Item} from '../items/item.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  categories$: Observable<Category[]>;
  allCategories: Category[];
  foodCategories: Category[] = [];
  beverageCategories: Category[] = [];
  items: Item[];
  id: string;
  pathAttachment: string;
  isFood = 'true';
  backgroundTitle: string;

  isFinished = false;




  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage,
    private categoryService: CategoryService,
    private itemService: ItemService,


  ) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  async ngOnInit() {
    this.gertUrlData();

    this.items = this.itemService.getAllDegasoItems();
    this.allCategories = this.categoryService.getAllDegasoCategories() ;

    this.filterCategories();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  filterCategories() {
    const timeout = setInterval(() => {
      if (this.allCategories && !this.isFinished) {
        for (const category of this.allCategories){
          for (const item of this.items) {
            if (category.name === item.category) {
              if (!this.foodCategories.includes(category) && !this.beverageCategories.includes(category)) {
                if (item.kitchenRelevant) {
                  this.foodCategories.push(category);
                } else {
                  this.beverageCategories.push(category);
                }
              }
            }
          }
        }

        clearInterval(timeout);
        this.isFinished = true;
      }
    }, 100);

  }
  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////


  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  private gertUrlData() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');

        return;
      }
      this.id = paramMap.get('id');

      this.isFood = paramMap.get('hasFood');

      this.backgroundTitle = paramMap.get('backgroundTitle');

      this.pathAttachment =
        this.isFood === 'true' ? 'categories-food' : 'categories-beverages';
    });
  }

  // ----------------------------------------------------------------------------------------------


  // ----------------------------------------------------------------------------------------------

  //#endregion
}
