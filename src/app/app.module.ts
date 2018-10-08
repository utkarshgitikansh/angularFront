import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CurrentMatchesService } from './current-matches.service';



@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxJsonViewerModule,
    Ng2SmartTableModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    HttpModule,
    FormsModule
  ],
  
  providers: [
    CurrentMatchesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
