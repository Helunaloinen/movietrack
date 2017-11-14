import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { Observable } from 'rxjs/Observable';
import firebase from 'firebase';



@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  Movies: Observable<any[]>;
  newMovie="";
  testi;
 

  constructor(public fbProvider:FirebaseProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.Movies = this.fbProvider.getMovies().valueChanges();
  }

  ionViewDidLoad() {
   // 
    console.log(this.Movies);
    

  }

}
