//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseProvider {
  userId;

  constructor( private myMovie:AngularFireDatabase) {
  }
    getMovies() {
      this.userId = firebase.auth().currentUser.uid
      return this.myMovie.list(this.userId+'/Movies/');
    }
   
    addMovie(name) {
      this.userId = firebase.auth().currentUser.uid
      this.myMovie.list(this.userId+'/Movies/').push(name);
    }
   
    removeMovie(id) {
      this.userId = firebase.auth().currentUser.uid
      this.myMovie.list(this.userId+'/Movies/').remove(id);
    }
    


}
