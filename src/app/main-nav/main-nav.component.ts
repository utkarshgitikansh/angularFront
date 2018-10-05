import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DataInfoService } from '../data-info.service';
import { WeatherInfoService } from '../weather-info.service';


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

// model:{
//   firstname : any;
//   lastname : any;
// }
weatherForm: Boolean;
hideForm: Boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
    
  constructor(private breakpointObserver: BreakpointObserver, private service:DataInfoService, private wservice:WeatherInfoService) {}
  

  ngOnInit() {
    // this.service.getAll().subscribe(
    //   data => {
    //     this.info = data;
        
    //   },
      
    // )
  } 

  cricketScore(){

       this.weatherForm = false;
       this.service.getAll().subscribe(
      data => {
        this.info = data;
        
      },
      
    )
  }
  
  formWeather(){

    this.weatherForm = true;
    this.hideForm = false;
  }

  liveWeather(){
 
    var detail = this.model;
    var city =detail.lastName;
    var state= detail.firstName;
  
     this.wservice.getWeather(city, state).subscribe(
       data => {
         this.info = data;
       },
      
   )
   
    this.weatherForm = false;
    this.hideForm = true;
  
  }
  }
