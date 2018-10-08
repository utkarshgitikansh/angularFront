import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataInfoService } from '../data-info.service';
import { WeatherInfoService } from '../weather-info.service';
import { CurrentMatchesService } from './../current-matches.service';
import { Current_matches } from './../current_matches';
import { weather } from './../weather';


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
weather_elements : weather[];
// model:{
//   firstname : any;
//   lastname : any;
// }
weatherForm: Boolean;
cricInfo: Boolean;
weatherInfo : Boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private service:DataInfoService, private wservice:WeatherInfoService, private cmatches:CurrentMatchesService ) {}
  

  ngOnInit() {
    // this.service.getAll().subscribe(
    //   data => {
    //     this.info = data;
        
    //   },
      
    // )
  } 

  // cricketScore(){

  //      this.weatherForm = false;
  //      this.service.getAll().subscribe(
  //     data => {
  //       this.info = data;
        
  //     },
      
  //   )
  // }
  
  cricketScore(){

    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = true;
    this.cmatches.getMatches().subscribe((data: Current_matches[]) => {
      this.info = data;
      this.characters = this.info.current_matches;
  });
  
  
  }


  formWeather(){

    this.weatherForm = true;
    //this.hideForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
  }

  liveWeather(){
 
    this.weatherInfo = true;
    var detail = this.model;
    var city =detail.lastName;
    var state= detail.firstName;
  
     this.wservice.getWeather(city, state).subscribe((data: weather[]) => {
      this.info = data;
      this.weather_elements = this.info.temperature;
  });
  
   
    this.weatherForm = false;
   // this.hideForm = false;
   this.cricInfo = false;
  }


  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      teamA: {
        title: 'Team A'
      },
      teamB: {
        title: 'Team B'
      }
      ,
      winner: {
        title: 'Winner'
      }
      ,
      type: {
        title: 'Type'
      }
    }
  };


  settings_weather = {
    columns: {
      full_name: {
        title: 'full_name'
      },
      weather: {
        title: 'weather'
      },
      temp_celsius: {
        title: 'temp_celsius'
      }
      ,
      relative_humidity: {
        title: 'relative_humidity'
      }
      ,
      icon_url: {
        title: 'icon_url'
      }
    }
  };

  }


 

