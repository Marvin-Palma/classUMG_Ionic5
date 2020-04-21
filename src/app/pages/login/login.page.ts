import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  eye:string;
  tipoInput:string;
  constructor() { 
    this.eye="eye-outline";
    this.tipoInput="password";
  }

  ngOnInit() {
  }

  clickEye(){
    this.eye=="eye-outline"? this.eye="eye-off-outline": this.eye="eye-outline"
    this.tipoInput=="password"? this.tipoInput="text": this.tipoInput="password";
  }

}
