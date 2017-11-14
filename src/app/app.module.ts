import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AddPage } from '../pages/add/add';
import { MoviesPage } from '../pages/movies/movies';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import firebase from 'firebase';
import { FirebaseProvider } from '../providers/firebase/firebase';

export const firebaseAuth = {
  apiKey: "AIzaSyDJmgrnDEUJBH0L1Sef1JM5slrquIBX6Y4",
  authDomain: "movietrack-71920.firebaseapp.com",
  databaseURL: "https://movietrack-71920.firebaseio.com",
  projectId: "movietrack-71920",
  storageBucket: "",
  messagingSenderId: "314864919615"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    AddPage,
    MoviesPage,
    RegisterPage
  ],

  imports: [

    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    HttpModule,
    AngularFireDatabaseModule,
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    LoginPage,
    AddPage,
    MoviesPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    
  ]
})
export class AppModule {}
