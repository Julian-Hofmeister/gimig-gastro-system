import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Category } from './category.model';
import { ImageService } from './image.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage implements OnInit, OnDestroy {
  id: string;
  isFood: any;
  pathAttachment: string;

  isLoading = false;

  // SUBS
  private streamSub: Subscription;

  categories: Category[] = [];

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private afStorage: AngularFireStorage,
    private imageService: ImageService
  ) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('id')) {
        this.navCtrl.navigateBack('/home');
        return;
      }
      console.log(paramMap.get('id'));
      this.id = paramMap.get('id');
      this.isFood = paramMap.get('hasFood');
      // this.id = 'categories';
    });

    this.pathAttachment =
      this.isFood == 'true' ? 'categories-food' : 'categories-beverages';

    // GET CATEGORIES
    this.streamSub = this.categoryService
      .getCategories(this.id, this.pathAttachment)
      .subscribe((categories) => {
        // EMPTY LOCAL CATEGORIES
        this.categories = [];

        // DEFINE NEW CATEGORY
        for (let category of categories) {
          const imagePath = this.afStorage
            .ref(category.imagePath)
            .getDownloadURL();

          // this.imageService.storeImage(imagePath);

          const fetchedCategory = new Category(
            category.name,
            category.hasCategories,
            category.hasFood,
            imagePath,
            category.isVisible,
            category.id,
            category.parentId
          );

          this.categories.push(fetchedCategory);
        }
        this.isLoading = false;
      });
  }

  openCategory(name: string) {
    this.navCtrl.navigateForward(['/', 'items', name]);
  }

  ngOnDestroy() {
    // DESTROY SUBS
    this.streamSub.unsubscribe();
  }
}
