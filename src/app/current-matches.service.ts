import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurrentMatchesService {

  constructor(private http: HttpClient) { }

  url = 'https://lifesoul.herokuapp.com/cricket';

  getMatches() {
    return this
            .http
            .get(`${this.url}`);
        }
}
