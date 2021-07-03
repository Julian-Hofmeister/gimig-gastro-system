import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Category } from './category.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit, OnDestroy {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////
  categories: Category[] = [];

  id: string;
  pathAttachment: string;
  isLoading = false;

  private categorySub: Subscription;
  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage,
    private categoryService: CategoryService
  ) {}
  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////
  ngOnInit() {
    this.gertUrlData();

    this.fetchCategoriesFromFirestore();
  }

  ngOnDestroy() {
    this.categorySub.unsubscribe();
  }
  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

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
      const isFood = paramMap.get('hasFood');
      this.pathAttachment =
        isFood == 'true' ? 'categories-food' : 'categories-beverages';
    });
  }

  private fetchCategoriesFromFirestore() {
    this.isLoading = true;

    this.categorySub = this.categoryService
      .getCategories(this.id, this.pathAttachment)
      .subscribe((categories) => {
        this.categories = [];

        for (let category of categories) {
          const imagePath = this.afStorage
            .ref(category.imagePath)
            .getDownloadURL();

          const fetchedCategory: Category = {
            name: category.name,
            hasCategories: category.hasCategories,
            hasFood: category.hasFood,
            imagePath: imagePath,
            isVisible: category.isVisible,
            id: category.id,
            parentId: category.parentId,
          };

          if (fetchedCategory.isVisible) {
            this.categories.push(fetchedCategory);
          }
        }

        this.isLoading = false;
      });
  }
  // ----------------------------------------------------------------------------------------------

  //#endregion
}
