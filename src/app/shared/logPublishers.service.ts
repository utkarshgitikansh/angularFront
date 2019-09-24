import { Injectable } from '@angular/core';
      
import { LogPublisher, LogConsole, LogLocalStorage }
  from "./log-publishers";

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { LogPublisherConfig } from './log-publishers'
import { Http } from '@angular/http';
      

const PUBLISHERS_FILE =
  "/src/app/assets/log-publishers.json";


@Injectable()
export class LogPublishersService {
   
  constructor(private http: Http) {
    // Build publishers arrays
    this.buildPublishers();
  }
      
  // Public properties
  publishers: LogPublisher[] = [];
      
  // Build publishers array
  buildPublishers(): void {
    let logPub: LogPublisher;
        
    this.getLoggers().subscribe(response => {
      for (let pub of response.filter(p => p.isActive)) {
        switch (pub.loggerName.toLowerCase()) {
          case "console":
            logPub = new LogConsole();
            break;
          case "localstorage":
            logPub = new LogLocalStorage();
            break;
        }
        // Set location of logging
        logPub.location = pub.loggerLocation;
        // Add publisher to array
        this.publishers.push(logPub);
      }
    });
  }
  
  getLoggers(): Observable<LogPublisherConfig[]> {
    return this.http.get(PUBLISHERS_FILE)
      .map(response => response.json())
      .catch(this.handleErrors);
  }

  private handleErrors(error: any):
           Observable<any> {
  let errors: string[] = [];
  let msg: string = "";
      
  msg = "Status: " + error.status;
  msg += " - Status Text: " + error.statusText;
  if (error.json()) {
    msg += " - Exception Message: "
        + error.json().exceptionMessage;
  }
  errors.push(msg);
      
  console.error('An error occurred', errors);
      
  return Observable.throw(errors);
}




}