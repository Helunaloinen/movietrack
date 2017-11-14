import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from './../../providers/firebase/firebase';
//import { AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
 
})
export class AddPage {
  @ViewChild('search') search; //from html input

  Movies: Observable <any[]>;
  newMovie="";
  title:string;
  api:string;
 

  constructor( public navCtrl: NavController, public navParams: NavParams, public fbProvider:FirebaseProvider) {
    this.Movies= this.fbProvider.getMovies();
    var nimi= nimi;
  }

  addMovie() {
    this.title=document.getElementById('title').innerText;
    console.log(this.title);
    this.fbProvider.addMovie(this.title);
  }
 
  removeMovie(id) {
    this.fbProvider.removeMovie(id);
  }

  searchMovie(){ 
    console.log(this.search)
    this.getMovie(this.search.value);
  

  }
  
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  
//moviesearch:
getMovie(srcvalue){
  var vastaus="";
 
  var api="http://www.omdbapi.com/?t="+encodeURI(srcvalue)+"&plot=full&apikey=cd7d40e9";
       var jsonhttp= new XMLHttpRequest();
            jsonhttp.open("GET", api, true);
            jsonhttp.send();
            jsonhttp.onreadystatechange=function(){
          if(jsonhttp.readyState==4 && jsonhttp.status==200){
              vastaus=JSON.parse(jsonhttp.responseText);
          
              var nimi=vastaus.Title;
              var kesto=vastaus.Runtime;
              var tyyppi=vastaus.Type;
              var julkaisu=vastaus.Released;
              var ohjaus=vastaus.Director;
              var paaOsat=vastaus.Actors;
              var kuvaus=vastaus.Plot;
              var arvio=vastaus.Ratings[0].Value;
              var info="<b> Director: </b>" + "<i>"+ ohjaus +"</i>" + "<br><b>Runtime:</b> <i>" + kesto +",</i><b> Type:</b><i> " + tyyppi + 
              ", </i><b>Release date:</b><i> " + julkaisu +"</i><b><br>Actors:</b><i> "+paaOsat+"</i></p><p><b>Plot:</b><br><i>"+kuvaus+"</i><br><br><b>IMDB Rating: </b><i>" +
              arvio +"</i>";
              console.log(info);
              document.getElementById('poster').src=vastaus.Poster;
              document.getElementById('title').innerText=nimi;
              document.getElementById('info').innerHTML=info;
              document.getElementById('movie').style.visibility="visible";
 
          console.log(nimi);
          
      
        }
        //return vastaus;   //console.log(nimi);
      }
  

}
  

}