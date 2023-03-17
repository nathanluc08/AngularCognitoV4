import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiServerService} from "../../services/api-server.service";
@Component({
  selector: 'app-dashboardChartJS',
  templateUrl: './dashboard-chartjs.component.html',
  styleUrls: ['./dashboard-chartjs.component.scss']
})
export class DashboardChartJSComponent implements OnInit, OnDestroy{
  id = 0;
  constructor(private _apiServer:ApiServerService) {}
  ngOnInit(): void {
    //this._apiServer.getApi();
    this.callMethod();
    this.id = window.setInterval(() => { this.callMethod() }, 60000);
  }
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  callMethod(){
    this._apiServer.getApi();
  }
}
