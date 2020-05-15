import { Component, OnInit } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { DataServiceService } from './services/data-service.service';
import { Componente } from './interfaces/interfaces';
import { Observable } from 'rxjs';
import { HomeService } from './services/home/home.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  
  components:Observable<Componente[]>;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private dataService: DataServiceService,
    private homeService:HomeService,
    private navController:NavController
  ) {
    this.initializeApp();
    
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
      this.components = this.dataService.getMenu();
      if(this.platform.is('cordova')){
        this.screenOrientation.lock('portrait');
      }
      this.homeService.obtenerInfoUsuario().then(res=>{
        res.subscribe(async res=>{
          if(res.status==true){
            this.navController.navigateRoot('/home');
          }else{
            this.navController.navigateRoot('/login');
          }
        });
      });
    });
  }
}
