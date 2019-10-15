import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class TravelDataService {

  constructor(public http: Http) {}

  getCity(city, dcity) {
    return this.http
      .get("https://city-server.herokuapp.com/travel?city=" + city + "&dcity=" + dcity)
      .map(res => res.json());
  }

  getHotel(city) {
    return this.http
      .get("http://city-server.herokuapp.com/hotel?city=" + city)
      .map(res => res.json());
  }

}
