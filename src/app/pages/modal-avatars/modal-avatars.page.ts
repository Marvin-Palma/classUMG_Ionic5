import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-avatars',
  templateUrl: './modal-avatars.page.html',
  styleUrls: ['./modal-avatars.page.scss'],
})
export class ModalAvatarsPage implements OnInit {

  @ViewChild(IonSegment, {static: false}) segment: IonSegment;

  avatarsMen= Array(52);
  avatarsWomen= Array(44);
  avatars:any;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    for (var i =0; i< this.avatarsMen.length; i++){
      this.avatarsMen[i]=(i+1);
    }
    for (var i =0; i< this.avatarsWomen.length; i++){
      this.avatarsWomen[i]=(i+1);
    }
    this.llenadoDeVariables();
  }

  ionViewDidEnter() {
    this.segment.value="Masculino";
  }

  async llenadoDeVariables(){
    await this.avatarsMen.forEach((avatar, index) => {
      avatar="../../../assets/svg/avatars/"+(index+1)+".svg";
      this.avatarsMen[index]=avatar;
    });
    await this.avatarsWomen.forEach((avatar, index) => {
      index=index+52;
      avatar="../../../assets/svg/avatars/"+(index+1)+".svg";
      this.avatarsWomen[(index-52)]=avatar;
    });
    this.avatars=this.avatarsMen;
  }

  cambioCategoria(event){
    const valorSegmento = event.detail.value;
    
    if(valorSegmento=="Masculino"){
      this.avatars=this.avatarsMen;
    }else{
      this.avatars=this.avatarsWomen;
    }
  }

  seleccionaAvatar(avatar){
    this.modalController.dismiss({
      avatar: avatar
    });
  }

}
