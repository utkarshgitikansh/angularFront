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

  getPlayer(name){

    return this.http.get('https://cricapi.com/api/playerFinder?apikey=QtVy9OkhmzX7RIUo5xQdOgQ0ffE2&name='+name)   
      .map(res => res.json()
    )}
  
    getStats(pid){
    return this.http.get('https://cricapi.com/api/playerStats?apikey=YQcxw12HpBMe1UaJ6TsKtZTC3Br2&pid='+pid)   
      .map(res => res.json()
    )};

}
