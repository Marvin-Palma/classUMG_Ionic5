import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  constructor(private navController:NavController) { }

  ngOnInit() {}

  navegar(pagina:string){
    console.log("Root");
    this.navController.navigateRoot(pagina);
  }
}
