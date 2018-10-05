import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';




@Injectable()
export class DataInfoService {
  
  url;

  constructor(public http: Http) {
  }

  getAll() {
    return this.http.get('https://lifesoul.herokuapp.com/cricket').map(res => res.json());;
  }

}
