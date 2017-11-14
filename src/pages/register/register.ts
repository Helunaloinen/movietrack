import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import {AngularFireAuth} from 'angularfire2/auth';
import {LoginPage} from '../login/login';


@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild('username') user; //from html field
  @ViewChild('password') password; //same
  constructor(private alertCtrl:AlertController, private fire:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert(message:string) { //message to user after register
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser() {
    console.log("rekisteröi");
    this.fire.auth.createUserWithEmailAndPassword(this.user.value, this.password.value) //set parameters user & pass to Angular auth
    .then( data => {  //if validation ok
      this.alert('Rekisteröinti OK!'); //message 
      this.navCtrl.setRoot(LoginPage); //go to loginpage
    })
    .catch(error =>{
      this.alert( error); //if not ok.. alert message
    });

  }
}
