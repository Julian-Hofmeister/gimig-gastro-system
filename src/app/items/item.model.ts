import { Observable } from 'rxjs';

export interface Item {

  _id: string;
  name: string;
  description: string;
  price: number;
  imagePath: Observable<any>;
  imageRef: string;
  isVisible: boolean;
  kitchenRelevant: boolean;
  // parentId: string;
  category: string;
  amount?: number;
  isOrdered?: boolean;
  orderTimestamp?: number;
  availableOptions?: string[];
  selectedOptions?: string[];
  availableOptions2?: string[];
  selectedOptions2?: string[];

  // DEGASO
  order?: number;
  stockAmount?: number;
  stockChecking?: boolean;
  tax?: string;
  active?: boolean;
  combinableWith?: [];
  combinedWith?: [];
  customPrinterAddress?: string;

  showOnGimig?: boolean;


}
