import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataInfoService } from '../data-info.service';
import { WeatherInfoService } from '../weather-info.service';
import { CurrentMatchesService } from './../current-matches.service';
import { Current_matches } from './../current_matches';
import { weather } from './../weather';
import { PlayerData } from './../player-data';
import { DataSource } from '@angular/cdk/collections';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Request } from '@angular/http';
import { PlayerInfoService } from './../player-info.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css'],
  providers: [DataInfoService,WeatherInfoService]
})
export class MainNavComponent {

info:any = "No Data";
winfo: any = "No Data";
model: any = {

};


characters: Current_matches[];

// model:{
//   firstname : any;
//   lastname : any;
// }
weatherForm: Boolean;
cricInfo: Boolean;
upcomingInfo: Boolean;
flag: Boolean;
weatherInfo : Boolean;
menuInfo : Boolean;
playerform : Boolean;
playerBio : Boolean;
bat : Boolean;
playerData : PlayerData[];
weather_elements : weather[];
climate : weather[];

//dataSource = new UserDataSource(this.cmatches);
displayedColumns = ['Date','Team A','Team B','Toss','Winner']

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private service:DataInfoService, private wservice:WeatherInfoService, private cmatches:CurrentMatchesService ,
      private spinnerService: Ng4LoadingSpinnerService,private playerservices:PlayerInfoService ) {}
  

  ngOnInit() {
    
  }

  menu(){
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.upcomingInfo = false;
    this.menuInfo = true;
    this.playerBio = false;
    this.playerform = false;

  }
  
  cricketScore(){

    this.spinnerService.show();
    this.weatherForm = false;
    this.weatherInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.cricInfo = true;
    this.playerBio = false;
    this.playerform = false;
    
    this.cmatches.getMatches().subscribe((data: Current_matches[]) => {
     
      this.info = data;
      
      this.characters = this.info.current_matches;
  });

  setTimeout( _=>{
    this.spinnerService.hide();
  }, 2000)
  

  }

  upcomingScore(){

    this.spinnerService.show();
    this.weatherForm = false;
    this.weatherInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = true;
    this.cricInfo = false;
    this.playerBio = false;
    this.playerform = false;
    
    this.cmatches.getMatches().subscribe((data: Current_matches[]) => {
     
      this.info = data;
      
      this.characters = this.info.upcoming_matches;
  });

  setTimeout( _=>{
    this.spinnerService.hide();
  }, 2000)
  

  }
 
formWeather(){

  this.weatherForm = true;
  this.weatherInfo = false;
  this.cricInfo = false;
  this.menuInfo = false;
  this.upcomingInfo = false;
  this.playerBio = false;
  this.playerform = false;
}


  liveWeather(){


   // var detail = this.model;
   // var city =detail.lastName;
   // var state= detail.firstName;

    this.weather_elements = null;
    //console.log(this.weather_elements);
      this.liveWeather1(this.model.firstName, this.model.lastName);
   
    
    //this.liveWeather();
  }

  liveWeather1(state,city){
        
       
        
      this.spinnerService.show();
      this.weatherInfo = true;
      this.wservice.getWeather(city,state).subscribe((data: weather[]) => {
      
  });


      this.weatherForm = false;
   // this.hideForm = false;
      this.cricInfo = false;
      this.menuInfo = false;
      this.upcomingInfo = false;
      this.playerBio = false;
      this.playerform = false;

      this.formWeather();
      this.liveWeather2(state, city);

}

  liveWeather2(state,city){
        
       
        
        
        this.weatherInfo = true;
        this.wservice.getWeather(city,state).subscribe((data: weather[]) => {
        this.info = data;
        this.weather_elements = this.info.temperature;
        this.climate = this.weather_elements;
        this.info = null;   
    });
 
        this.spinnerService.hide();
        this.weatherForm = false;
     // this.hideForm = false;
        this.cricInfo = false;
        this.menuInfo = false;
        this.upcomingInfo = false;
        this.playerBio = false;
        this.playerform = false;

  }

  playerForm(){
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerform = true;
    this.playerBio = false;

  }

  playerScore(){
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerform = false;
    this.playerBio = true;
    var name = this.model.firstName;

    this.playerservices.getPlayer(name).subscribe((data : PlayerData[]) => {
    this.info = data;
    this.playerScore1();


  });
    // this.menu();  
    // this.playerForm();
   
  }

  playerScore1(){

    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerform = false;
    this.playerBio = true;
    var name = this.model.firstName;

    this.playerservices.getPlayer(name).subscribe((data : PlayerData[]) => {
      setTimeout( _=>{
        
        this.playerData = this.info.info;
        var check = JSON.stringify(this.playerData[0]["player_role"]);
        if(check.includes("batsman")) {
        this.bat = true;
        }
        console.log(this.playerData);
        this.info = null;   
      }, 2000)
  });
  }
  }
  
  export class UserDataSource extends DataSource<any> {

    constructor(private userService: CurrentMatchesService){
      super();
    }

    connect(): Observable<any>{
      return this.userService.getMatches();
    }

    disconnect() {}
  }

 

