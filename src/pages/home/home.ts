import { Provedor1Provider } from './../../providers/provedor1/provedor1';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
//video min 5:14
  constructor(public navCtrl: NavController, public proveedor:Provedor1Provider) {

  }
  ionViewDidLoad(){
  this.proveedor.obtenerdatos()
  //.Subscribe{(data)=>{this.}}
  
 
}

}
