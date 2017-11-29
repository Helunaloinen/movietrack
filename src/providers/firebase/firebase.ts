//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import firebase from 'firebase';
import { HttpModule } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FirebaseProvider {
  userId;

  constructor( private myMovie:AngularFireDatabase) {
    this.userId = firebase.auth().currentUser.uid

  }
    getMovies() {
      this.userId = firebase.auth().currentUser.uid
      return this.myMovie.list(this.userId);
    }
   
    addMovie(name) {
      this.userId = firebase.auth().currentUser.uid
      this.myMovie.list(this.userId).push(name);
    }
   
    removeMovie(key: string) {
      this.userId = firebase.auth().currentUser.uid
      this.myMovie.list(this.userId).remove();
    }
    


}
