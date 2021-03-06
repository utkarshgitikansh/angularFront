import { Component } from "@angular/core";
import { MatCardModule } from "@angular/material/card";

import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { DataInfoService } from "../data-info.service";
import { WeatherInfoService } from "../weather-info.service";
import { CurrentMatchesService } from "./../current-matches.service";
import { Current_matches } from "./../current_matches";
import { current_weather } from "./../weather";
import { PlayerData } from "./../player-data";
import { DataSource } from "@angular/cdk/collections";
import { Ng4LoadingSpinnerService } from "ng4-loading-spinner";
import { Request } from "@angular/http";
import { PlayerInfoService } from "./../player-info.service";
import { BlogServiceService } from "./../blog-service.service";
import { TravelDataService } from "./../travel-data.service";
import { NewsProviderService } from "./../news-provider.service";

@Component({
  selector: "app-main-nav",
  templateUrl: "./main-nav.component.html",
  styleUrls: ["./main-nav.component.css"],
  providers: [
    DataInfoService,
    WeatherInfoService,
    BlogServiceService,
    TravelDataService,
    NewsProviderService,
  ],
})
export class MainNavComponent {
  info: any = "No Data";
  winfo: any = "No Data";
  model: any = {};

  characters: Current_matches[];
  weather: current_weather[];
  city: String;
  city_data: String;
  // model:{
  //   firstname : any;
  //   lastname : any;
  // }
  weatherForm: Boolean;
  cricInfo: Boolean;
  upcomingInfo: Boolean;
  flag: Boolean;
  weatherInfo: Boolean;
  menuInfo: Boolean;
  playerform: Boolean;
  playerBio: Boolean;
  bat = false;
  bowl = true;
  icon_state: Boolean;
  icon_img: string;
  playerData = [];
  blogData: any;
  blog_state: Boolean;
  playerODI: any;
  playerTest: any;
  playerT20: any;
  playerBat = [];
  playerBowl = [];
  check = false;
  home = true;
  life_icon: any;
  login = true;
  password: any;
  menuFlag = false;
  travelflag = false;
  travelInfo = false;
  travel_city: any;
  travel_dcity: any;
  newsInfo = false;

  travel = [];
  name1: any;
  dura1: any;
  price1: any;
  date_d1: any;
  date_r1: any;
  travel_len: any;

  news_headline: any;
  news_content: any;
  news_image: any;

  buttonInfo = true;

  life_icon_2: any;

  //climate : weather[];

  //dataSource = new UserDataSource(this.cmatches);
  displayedColumns = ["Date", "Team A", "Team B", "Toss", "Winner"];

  blogscolumns = ["blog", "title"];

  cricketcolumns = ["title", "button"];
  cricketfunctions = ["cricketScore()", "upcomingScore()", "playerForm()"];

  menuItems = [
    {
      name: "Live Matches",
      func: "cricketScore()",
    },

    {
      name: "Upcoming Matches",
      func: "upcomingScore()",
    },

    {
      name: "Player Info",
      func: "playerForm()",
    },
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private breakpointObserver: BreakpointObserver,
    private service: DataInfoService,
    private wservice: WeatherInfoService,
    private cmatches: CurrentMatchesService,
    private spinnerService: Ng4LoadingSpinnerService,
    private playerservices: PlayerInfoService,
    private blogServices: BlogServiceService,
    private travelData: TravelDataService,
    private newsData: NewsProviderService
  ) {}

  ngOnInit() {
    this.spinnerService.show();
    this.life_icon = `../../../assets/lifesoul_icon.png`;
    this.life_icon_2 = `../../../assets/screen 2.png`;

    //news info

    this.newsData.getNews().subscribe((data) => {
      var item = data;

      this.news_headline = data["headLines"];
      this.news_content = data["content"];
      this.news_image = data["image"];

      setTimeout(() => {}, 1000);

      this.spinnerService.hide();
      // this.menuFlag = true;
      // this.login = false;

      //console.log(item);
    });
  }

  root() {
    // this.spinnerService.show();
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.upcomingInfo = false;
    this.menuInfo = false;
    this.travelflag = false;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = false;
    this.travelInfo = false;

    this.home = true;
    this.buttonInfo = true;
    this.newsInfo = true;
  }

  menu() {
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.upcomingInfo = false;
    this.menuInfo = true;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = false;
    this.home = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;
  }

  cricketScore() {
    this.spinnerService.show();
    this.weatherForm = false;
    this.weatherInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.cricInfo = true;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = false;
    this.home = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;

    this.cmatches.getMatches().subscribe((data: Current_matches[]) => {
      this.info = data;

      this.characters = this.info.current_matches;
      this.spinnerService.hide();
    });
  }

  upcomingScore() {
    this.spinnerService.show();
    this.weatherForm = false;
    this.weatherInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = true;
    this.cricInfo = false;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = false;
    this.home = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;

    this.cmatches.getMatches().subscribe((data: Current_matches[]) => {
      this.info = data;

      this.characters = this.info.upcoming_matches;
    });

    this.spinnerService.hide();
  }

  formWeather() {
    this.weatherForm = true;
    this.weatherInfo = true;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = false;
    this.home = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;
  }

  liveWeather() {
    // var detail = this.model;
    // var city =detail.lastName;
    // var state= detail.firstName;

    //this.weather = null;
    //console.log(this.weather_elements);
    this.spinnerService.show();
    this.liveWeather1(this.model.firstName, this.model.lastName);

    //this.liveWeather();
  }

  liveWeather1(state, city) {
    this.spinnerService.show();
    // this.weatherInfo = true;

    this.wservice
      .getWeather(city, state)
      .subscribe((data: current_weather[]) => {
        this.info = data;
        this.city = this.info.temperature[0]["full_name"];

        console.log(this.city);
        this.weather = this.info.temperature;
        console.log(this.weather);
        this.icon_img = this.weather[0]["icon_url"][0];
        //this.climate = this.weather_elements;
        //this.info = null;
        this.spinnerService.hide();
      });

    this.cityInfo(city);

    // console.log(this.icon_img);
    this.weatherForm = false;
    this.weatherInfo = true;
    this.icon_state = true;
    this.login = false;
    this.spinnerService.hide();
    // this.hideForm = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerBio = false;
    this.playerform = false;
    this.blog_state = false;
    this.home = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;

    //this.formWeather();
    //this.liveWeather2(state, city);
  }

  // city info

  cityInfo(city) {
    this.wservice.getcityInfo(city).subscribe((data) => {
      this.city_data = data;
      console.log(this.city_data);
    });
  }

  liveWeather2(state, city) {
    this.weatherInfo = true;
    this.wservice
      .getWeather(city, state)
      .subscribe((data: current_weather[]) => {
        // this.info = data;
        // this.weather_elements = this.info.current;
        //this.climate = this.weather_elements;
        //this.info = null;
      });

    this.spinnerService.hide();
    this.weatherForm = false;
    // this.hideForm = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerBio = false;
    this.playerform = false;
    this.travelInfo = false;
    this.buttonInfo = false;
  }

  playerForm() {
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerform = true;
    this.playerBio = false;
    this.blog_state = false;
    this.home = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;
  }

  playerScore() {
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerform = false;
    this.playerBio = true;
    this.blog_state = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;

    this.spinnerService.show();

    var name = this.model.firstName;

    this.playerservices.getPlayer(name).subscribe((data: PlayerData[]) => {
      var pid = data["data"]["0"]["pid"];
      this.playerScore1(pid);
    });
    // this.menu();
    // this.playerForm();
  }

  playerScore1(pid) {
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.menuInfo = false;
    this.upcomingInfo = false;
    this.playerform = false;
    this.playerBio = true;
    this.blog_state = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;

    var name = this.model.firstName;

    this.playerservices.getStats(pid).subscribe((data) => {
      this.playerData = [];
      this.playerBat = [];
      this.playerBowl = [];
      this.playerData.push(data);
      this.playerBat.push(this.playerData["0"]["data"]["batting"]);
      this.playerBowl.push(this.playerData["0"]["data"]["bowling"]);

      this.spinnerService.hide();
      console.log(this.playerBat);
      this.check = true;
      var check = JSON.stringify(this.playerData["player_role"]);

      // if (check.includes("batsman")) {
      //   this.bat = true;
      //   this.bowl = false;
      // } else {
      //   this.bat = false;
      //   this.bowl = true;
      // }

      // if (this.bat == true) {
      //   console.log(this.playerData);
      // }
      //this.info = null;
    });
  }

  ///// getting blogs

  validate() {
    if (this.model.firstName == "qwerty") {
      this.root();

      this.spinnerService.hide();
      this.menuFlag = true;
      this.login = false;
      // this.home = true;
    } else alert("TRY AGAIN !!");
  }

  getBlog() {
    ////settings parameters

    this.spinnerService.show();
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.upcomingInfo = false;
    this.menuInfo = false;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = true;
    this.home = false;
    this.login = false;
    this.travelflag = false;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;

    this.blogServices.getBlogs().subscribe((data) => {
      setTimeout((_) => {
        var item = data;
        item["items"].forEach((element) => {
          this.blogData = item["items"];
          this.spinnerService.hide();
        });
      }, 1000);
    });
  }

  ///// Travel space

  menuTravel() {
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.upcomingInfo = false;
    this.menuInfo = false;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = false;
    this.home = false;
    this.login = false;
    this.travelflag = true;
    this.travelInfo = false;
    this.newsInfo = false;
    this.buttonInfo = false;
  }
  getTravel() {
    this.spinnerService.show();
    this.weatherForm = false;
    this.weatherInfo = false;
    this.cricInfo = false;
    this.upcomingInfo = false;
    this.menuInfo = false;
    this.playerBio = false;
    this.playerform = false;
    this.icon_state = false;
    this.blog_state = false;
    this.home = false;
    this.login = false;
    this.travelflag = false;
    this.newsInfo = false;
    this.buttonInfo = false;

    this.travelData
      .getCity(this.model.firstName, this.model.secondName)
      .subscribe((data) => {
        var name = data[0];
        var dura = data[1];
        var price = data[2];
        var date_d = data[3];
        var date_r = data[4];

        this.name1 = name;
        this.dura1 = dura;
        this.price1 = price;
        this.date_d1 = date_d;
        this.date_r1 = date_r;

        this.travelInfo = true;

        this.travel_len = name.length;

        console.log(name);
        console.log(dura);
        console.log(price);
        console.log(date_d);
        console.log(this.travel_len);

        this.spinnerService.hide();
      });
  }

  // getNews(){
  //   this.spinnerService.show();
  //   this.weatherForm = false;
  //   this.weatherInfo = false;
  //   this.cricInfo = false;
  //   this.upcomingInfo = false;
  //   this.menuInfo = false;
  //   this.playerBio = false;
  //   this.playerform = false;
  //   this.icon_state = false;
  //   this.blog_state = false;
  //   this.home = false;
  //   this.login = false;
  //   this.travelflag = false;
  //   this.travelInfo = false;
  //   this.newsInfo = true;

  //   this.newsData.getNews().subscribe(data => {

  //       var item = data;

  //        console.log(item);
  //        this.spinnerService.hide();

  //   });
  // }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: CurrentMatchesService) {
    super();
  }

  connect(): Observable<any> {
    return this.userService.getMatches();
  }

  disconnect() {}
}
