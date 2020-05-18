import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HomeService } from './services/home/home.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent{
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private homeService:HomeService,
    private navController:NavController,
    private menuController:MenuController
  ) {
    this.initializeApp();
    
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();
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
      //Oculta el Side Bar y solo muestra cuando el Toolbar sea visible
      this.menuController.enable(false);
    });
  }
}
