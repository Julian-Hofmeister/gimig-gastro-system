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
  // # SUBSCRIPTIONS
  private streamSub: Subscription;

  // # LISTS
  categories: Category[] = [];

  // # PROPERTIES
  id: string;
  pathAttachment: string;
  isLoading = false;

  // # CONSTRUCTOR
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private afStorage: AngularFireStorage,
    // # SERVICES
    private categoryService: CategoryService
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
      const isFood = paramMap.get('hasFood');
      this.pathAttachment =
        isFood == 'true' ? 'categories-food' : 'categories-beverages';
    });

    // * GET CATEGORIES
    this.streamSub = this.categoryService
      .getCategories(this.id, this.pathAttachment)
      .subscribe((categories) => {
        this.categories = [];

        // * DEFINE NEW CATEGORY
        for (let category of categories) {
          const imagePath = this.afStorage
            .ref(category.imagePath)
            .getDownloadURL();

          const fetchedCategory = new Category(
            category.name,
            category.hasCategories,
            category.hasFood,
            imagePath,
            category.isVisible,
            category.id,
            category.parentId
          );

          if (fetchedCategory.isVisible) {
            this.categories.push(fetchedCategory);
          }
        }
        // * DEACTIVATE LOADING INDICAtOR
        this.isLoading = false;
      });
  }

  // # FUNCTIONS
  openCategory(name: string) {
    this.navCtrl.navigateForward(['/', 'items', name]);
  }

  // # ON DESTROY
  ngOnDestroy() {
    this.streamSub.unsubscribe();
  }
}
