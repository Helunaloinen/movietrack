import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';
import { AngularFireList } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  MoviesRef: AngularFireList<any[]>;
  Movies: Observable<any[]>;
  User;
  avain;
 
  constructor(public afdb: AngularFireDatabase, public alertCtrl:AlertController, public fbProvider:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.User = firebase.auth().currentUser.uid;
    this.MoviesRef = afdb.list(this.User);
    this.Movies = this.MoviesRef.snapshotChanges();
  }

  removeMovie(key){
    this.MoviesRef.remove(key);
    this.alert("Removed a movie from your collection!");
  }

  ionViewDidLoad() {
    console.log();
  }

  alert(message:string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

}
