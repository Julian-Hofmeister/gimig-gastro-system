import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModalController, NavController} from '@ionic/angular';
import {Category} from '../category.model';
import {animate, state, style, transition, trigger, } from '@angular/animations';
import {EditService} from '../../admin/edit.service';
import {ImageModalComponent} from '../../admin/image-modal/image-modal.component';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({opacity: 1})),
      transition(':enter', [style({opacity: 0}), animate(300)]),
    ]),
  ],
})
export class CategoryCardComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() category: Category;

  @Input() backgroundTitle: string;

  blankImg = '/assets/images/grey.jpg';

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  editMode: boolean;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private editService: EditService,
    private modalCtrl: ModalController) {
  }

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    this.editMode = this.editService.getEditModeStatus();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  openContent(category: Category): void {

    console.log(category);

    this.navCtrl.navigateForward([
      '/',
      'items',
      category.name,
      this.backgroundTitle,
    ]);

    // if (category.hasCategories) {
    //   this.navCtrl.navigateForward([
    //     '/',
    //     'categories',
    //     category.id,
    //     category.hasFood,
    //     this.backgroundTitle,
    //   ]);
    // } else {
    //   this.navCtrl.navigateForward([
    //     '/',
    //     'items',
    //     category.id,
    //     category.hasFood,
    //     this.backgroundTitle,
    //   ]);
    // }


  }

  // ----------------------------------------------------------------------------------------------

  editCategory() {
    if (!this.editMode) {return; }

    const id = this.category._id;

    this.modalCtrl
      .create({
        component: ImageModalComponent,
        componentProps: { id, isItem: false },
      })
      .then((modalEl) => {
        modalEl.present();
      });

  }

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
