import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable({
  providedIn: "root"
})
export class BlogServiceService {
  constructor(public http: Http) {}

  getBlogs() {
    return this.http
      .get(
        "https://www.googleapis.com/blogger/v3/blogs/8550103547944167867/posts?key=AIzaSyCeHQxTnHn6e8PE5XU2g0rB6zp5qi1a1K0"
      )
      .map(res => res.json());
  }
}
