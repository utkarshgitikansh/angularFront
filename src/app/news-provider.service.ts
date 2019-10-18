import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";


@Injectable({
  providedIn: 'root'
})
export class NewsProviderService {

  constructor(public http: Http) {}

  getNews() {
    return this.http
      .get("https://lifesoul.herokuapp.com/news")
      .map(res => res.json());
  }

}
