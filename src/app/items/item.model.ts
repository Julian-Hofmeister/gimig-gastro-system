import { Observable } from 'rxjs';

export interface Item {
  name: string;
  description: string;
  price: number;

  imagePath: Observable<any>;
  imageRef: string;
  isVisible: boolean;
  isFood: boolean;
  id: string;
  parentId: string;
  amount?: number;
  isOrdered?: boolean;
  itemRefId?: string;
}
