import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  Movies : Observable<any[]>;
  User;
 

  constructor(public afdb: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.User = firebase.auth().currentUser.uid;
    this.Movies = afdb.list(this.User).valueChanges();
  
  }

  removeMovie(){
    
  }


  ionViewDidLoad() {
   // 
    console.log();
    

  }

}
