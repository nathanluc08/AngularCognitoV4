import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiServerService} from "../../services/api-server.service";
import {BnNgIdleService} from "bn-ng-idle";
import {Router} from "@angular/router";
@Component({
  selector: 'app-dashboardChartJS',
  templateUrl: './dashboard-chartjs.component.html',
  styleUrls: ['./dashboard-chartjs.component.scss']
})
export class DashboardChartJSComponent implements OnInit, OnDestroy{

  ExpirationTime = 3600000; // 8H = 28800000 // 10S = 10000
  id = 0;
  constructor(private _apiServer:ApiServerService, private router: Router, private bnIdle: BnNgIdleService) {}
  getPieServer() {
  this._apiServer.getApi();
  }
  ngOnInit(): void {
    //this._apiServer.getApi();
    this.callMethod();
    this.id = window.setInterval(() => { this.callMethod() }, 60000);
    setTimeout(() => {
      console.log("OK");
      this.Idle()
    }, this.ExpirationTime);
  }

  Idle(){
    this.bnIdle.startWatching(30).subscribe((isTimedOut: Boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        localStorage.removeItem('userToken');
        localStorage.removeItem('userName');
        this.router.navigate(['/sign-in']);
        this.bnIdle.stopTimer();
      }
    })
  }

  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  callMethod(){
    this.getPieServer()
  }
}
