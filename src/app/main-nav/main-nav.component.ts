import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataInfoService } from '../data-info.service';
import { WeatherInfoService } from '../weather-info.service';
import { CurrentMatchesService } from './../current-matches.service';
import { Current_matches } from './../current_matches';
import { weather } from './../weather';
import { DataSource } from '@angular/cdk/collections';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


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
//dataSource = new UserDataSource(this.cmatches);
displayedColumns = ['Date','Team A','Team B','Toss','Winner']

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private service:DataInfoService, private wservice:WeatherInfoService, private cmatches:CurrentMatchesService ,
      private spinnerService: Ng4LoadingSpinnerService) {}
  

  ngOnInit() {
  }
  
  cricketScore(){

    this.spinnerService.show();
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

 

