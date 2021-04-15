import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TableService } from '../table.service';

@Component({
  selector: 'app-call-service',
  templateUrl: './call-service.component.html',
  styleUrls: ['./call-service.component.scss'],
})
export class CallServiceComponent implements OnInit {
  @Input() message: string = 'Bedienung Rufen';

  constructor(
    private tableService: TableService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  onCallService() {
    this.tableService.sendServiceRequest();
    this.modalCtrl.dismiss();
  }
}
