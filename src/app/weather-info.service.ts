import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class WeatherInfoService {
  constructor(public http: Http) {}

  getWeather(city, state) {
    return this.http
      .get("https://lifesoul.herokuapp.com/weather?city=" + city)
      .map(res => res.json());
  }

  getcityInfo(city) {
    return this.http
      .get("https://city-server.herokuapp.com/info?city=" + city)
      .map(res => res.json());
  }
}
