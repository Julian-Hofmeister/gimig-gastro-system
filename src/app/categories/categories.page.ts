import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable, Subscription } from 'rxjs';
import { CategoryService } from './category.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { Category } from './category.model';

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

  id: string;

  pathAttachment: string;

  isFood = 'true';

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

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

    this.categories$ = this.categoryService.getCategories(
      this.id,
      this.pathAttachment
    );
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

      this.isFood = paramMap.get('hasFood');

      this.pathAttachment =
        this.isFood == 'true' ? 'categories-food' : 'categories-beverages';
    });
  }

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
