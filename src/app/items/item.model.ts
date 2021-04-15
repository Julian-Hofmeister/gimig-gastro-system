import { Observable } from 'rxjs';

export class Item {
  public name: string;
  public description: string;
  public price: number;
  public imagePath: Observable<any>;
  public imageRef: string;
  public isVisible: boolean;
  public isFood: boolean;
  public id: string;
  public parentId: string;
  public amount?: number;

  constructor(
    name: string,
    description: string,
    price: number,

    imagePath: Observable<any>,
    imageRef: string,
    isVisible: boolean,
    isFood: boolean,
    id: string,
    parentId: string,
    amount?: number
  ) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.imagePath = imagePath;
    this.imageRef = imageRef;
    this.isVisible = isVisible;
    this.isFood = isFood;
    this.id = id;
    this.parentId = parentId;
    this.amount = 1;
  }
}
