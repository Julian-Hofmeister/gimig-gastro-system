import {Component} from '@angular/core';

export interface Modal {
  component: any;
  style: string;
  mode?: 'md' | 'ios';

  componentProps?: any;
}
