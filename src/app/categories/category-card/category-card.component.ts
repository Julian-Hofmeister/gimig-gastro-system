import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Category } from '../category.model';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [style({ opacity: 0 }), animate(300)]),
    ]),
  ],
})
export class CategoryCardComponent implements OnInit {
  @Input() category: Category;

  constructor(private navCtrl: NavController, private route: ActivatedRoute) {}

  ngOnInit() {
    // console.log(this.category);
  }

  openContent(category: Category) {
    if (category.hasCategories) {
      this.navCtrl.navigateForward([
        '/',
        'categories',
        category.id,
        category.hasFood,
      ]);
    } else {
      this.navCtrl.navigateForward([
        '/',
        'items',
        category.id,
        category.hasFood,
      ]);
    }
  }
}
