import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-version-modal',
  templateUrl: './version-modal.page.html',
  styleUrls: ['./version-modal.page.scss'],
})
export class VersionModalPage implements OnInit {

  constructor(private modalController:ModalController) { }

  ngOnInit() {
  }

  salir(){
    this.modalController.dismiss();

  }

}
