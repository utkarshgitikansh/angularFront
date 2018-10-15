import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class PlayerInfoService {

  constructor(public http: Http) { }

  getPlayer(player){
    return this.http.get('https://lifesoul.herokuapp.com/playerBio?name='+player)   
      .map(res => res.json()
    )};

}
