import { Observable } from 'rxjs';

export interface Option {

  active: boolean;
  availableProducts: [{
    productName: string;
    productId: string;
  }];
  combinationProduct: boolean;
  name: string;
  price: string;
  _id: string;
}
