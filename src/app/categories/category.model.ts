import { Observable } from 'rxjs';

export interface Category {
  name: string;
  hasCategories: boolean;
  hasFood: boolean;
  imagePath: Observable<any>;
  isVisible: boolean;
  id: string;
  parentId: string;
}
