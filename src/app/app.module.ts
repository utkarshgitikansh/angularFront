import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainNavComponent } from "./main-nav/main-nav.component";
import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";
import { NgxJsonViewerModule } from "ngx-json-viewer";
import { FormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { CurrentMatchesService } from "./current-matches.service";
import { MatTableModule } from "@angular/material/table";
import { Ng4LoadingSpinnerModule } from "ng4-loading-spinner";
import { LogService } from "./shared/log.service";
import { LogTestComponent } from "./log-test/log-test.component";
import { LogPublishersService } from "./shared/logPublishers.service";
import { BlogInfoComponent } from "./blog-info/blog-info.component";
import { BlogServiceService } from "./blog-service.service";

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    LogTestComponent,
    BlogInfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxJsonViewerModule,
    Ng2SmartTableModule,
    LayoutModule,
    MatTableModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    Ng4LoadingSpinnerModule.forRoot()
  ],

  providers: [
    CurrentMatchesService,
    LogService,
    LogPublishersService,
    BlogServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  template: string = `<img src="http://pa1.narvii.com/5722/2c617cd9674417d272084884b61e4bb7dd5f0b15_hq.gif" />`;
}
