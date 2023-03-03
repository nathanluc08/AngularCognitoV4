import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from "@angular/common/http";
import { GoogleChartsModule } from 'angular-google-charts';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { MessageModalComponent } from './components/message-modal/message-modal.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { DashboardChartJSComponent } from './chartsJS/dashboardChartJS/dashboard-chartjs.component';
import { PieDBComponent } from './chartsJS/pie-db/pie-db.component';
import { PieServerComponent } from './chartsJS/pie-server/pie-server.component';
import { PieDBBackupComponent } from './chartsJS/pie-dbbackup/pie-dbbackup.component';
import { GraphDBSizeComponent } from './chartsJS/graph-dbsize/graph-dbsize.component';
import { PieDbGoogleChartsComponent } from './GoogleCharts/pie-db-GoogleCharts/pie-db-GoogleCharts.component';
import { DashboardGoogleChartsComponent } from './GoogleCharts/dashboard-GoogleCharts/dashboard-GoogleCharts.component';
import { ApiServerService } from "./services/api-server.service";
import { PieDbbackupGoogleCharts } from './GoogleCharts/pie-dbbackup-GoogleCharts/pie-dbbackup-GoogleCharts';
import { PieDbserverGoogleChartsComponent } from './GoogleCharts/pie-dbserver-GoogleCharts/pie-dbserver-GoogleCharts.component';
import { GraphDBSize2Component } from './chartsJS/graph-dbsize2/graph-dbsize2.component';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    MessageModalComponent,
    NavigationBarComponent,
    PieDBComponent,
    PieServerComponent,
    PieDBBackupComponent,
    GraphDBSizeComponent,
    PieDbGoogleChartsComponent,
    DashboardGoogleChartsComponent,
    DashboardChartJSComponent,
    PieDbbackupGoogleCharts,
    PieDbserverGoogleChartsComponent,
    GraphDBSize2Component,
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
    HttpClientModule,
    GoogleChartsModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [ApiServerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
