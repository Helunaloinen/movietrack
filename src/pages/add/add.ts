import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
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
  data="";
  test;
  public itemsList:Array<any>;
  public loadedItemsList:Array<any>;
 

  constructor( public navCtrl: NavController, public navParams: NavParams, public fbProvider:FirebaseProvider, public alertCtrl:AlertController) {
  
    var nimi= nimi;
  }
 
  getItems(value){
    console.log(value);
    if(value.length>1){
    var datalist=document.getElementById("datalist1");
      var api="http://www.omdbapi.com/?s="+encodeURI(value)+"&plot=full&apikey=cd7d40e9";
      var jsonhttp= new XMLHttpRequest();
      jsonhttp.open("GET", api, true);
      jsonhttp.send();
    jsonhttp.onreadystatechange=function(){
      if(jsonhttp.readyState==4 && jsonhttp.status==200){
          var vastaus=JSON.parse(jsonhttp.responseText);
         
          if(vastaus.Response!="False"&&vastaus.Search.length>0){
            for (var i=0; i<vastaus.Search.length;i++) {
            
              var option= document.createElement('option');
                option.value=vastaus.Search[i].Title;
                datalist.appendChild(option);
            
            }
          }
      }
          
    }
  }
  }
  

  addMovie() {
    this.title=document.getElementById('title').innerText;
    this.fbProvider.addMovie(this.title);
    this.alert(this.title +" added to your collection!");
    document.getElementById('movie').style.visibility="hidden";
    document.getElementById('search').innerHTML="";
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
            if(vastaus.Response!="False"){
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
            }else{
              alert("Movie not found");
            }
   
    
          }
       
      }

}
alert(message:string) {
  this.alertCtrl.create({
    title: 'Info!',
    subTitle: message,
    buttons: ['OK']
  }).present();
}


}