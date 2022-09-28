import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Observable } from 'rxjs';

export interface Restaurant {
  welcomeMessage: string;
  imagePath: string;
  mainCategory1: string;
  mainCategory2: string;
  mainIcon1: string;
  mainIcon2: string;
  theme: string;
  id: string;

  wifiName?: string;
  wifiPassword?: string;
  wifiQrCode?: string;

  feedbackImage?: string;
  feedbackQrCode?: string;

  name?: string;
}
