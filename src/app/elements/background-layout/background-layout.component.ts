import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background-layout',
  templateUrl: './background-layout.component.html',
  styleUrls: ['./background-layout.component.scss'],
})
export class BackgroundLayoutComponent implements OnInit {
  @Input() title: string;
  @Input() isCart: boolean;

  constructor() {}

  ngOnInit() {}
}
