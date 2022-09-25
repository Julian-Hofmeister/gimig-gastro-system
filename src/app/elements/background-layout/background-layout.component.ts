import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Restaurant } from 'src/app/home/restaurant.model';
import { RestaurantService } from 'src/app/home/restaurant.service';

@Component({
  selector: 'app-background-layout',
  templateUrl: './background-layout.component.html',
  styleUrls: ['./background-layout.component.scss'],
})
export class BackgroundLayoutComponent implements OnInit {
  //#region [ BINDINGS ] //////////////////////////////////////////////////////////////////////////

  @Input() title: string;

  @Input() color: string = localStorage.getItem('theme');

  @Input() isCart: boolean;

  //#endregion

  //#region [ PROPERTIES ] /////////////////////////////////////////////////////////////////////////

  restaurant$: Observable<Restaurant>;

  //#endregion

  //#region [ MEMBERS ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ CONSTRUCTORS ] //////////////////////////////////////////////////////////////////////

  constructor(private restaurantService: RestaurantService) {}

  //#endregion

  //#region [ LIFECYCLE ] /////////////////////////////////////////////////////////////////////////

  ngOnInit() {
    // this.getRestaurantTheme();
  }

  //#endregion

  //#region [ EMITTER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ RECEIVER ] ///////////////////////////////////////////////////////////////////////////

  //#endregion

  //#region [ PUBLIC ] ////////////////////////////////////////////////////////////////////////////

  // getRestaurantTheme() {
  //   this.restaurant$ = this.restaurantService.getRestaurantData();

  //   this.restaurant$.subscribe(async (data) => {
  //     console.log(data);

  //     this.color = data.theme;
  //   });
  // }
  // ----------------------------------------------------------------------------------------------

  //#endregion

  //#region [ PRIVATE ] ///////////////////////////////////////////////////////////////////////////

  // ----------------------------------------------------------------------------------------------

  //#endregion
}
