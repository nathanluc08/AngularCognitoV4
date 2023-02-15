import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import {ApiServerService} from "./services/api-server.service";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import { PieDBComponent } from './charts/pie-db/pie-db.component';
import { PieServerComponent } from './charts/pie-server/pie-server.component';
import { PieDBBackupComponent } from './charts/pie-dbbackup/pie-dbbackup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MessageModalComponent,
    NavigationBarComponent,
    DashboardComponent,
    PieDBComponent,
    PieServerComponent,
    PieDBBackupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ApiServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
