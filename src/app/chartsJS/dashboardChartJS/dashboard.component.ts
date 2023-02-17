import {Component, OnDestroy, OnInit} from '@angular/core';
import {ApiServerService} from "../../services/api-server.service";
@Component({
  selector: 'app-dashboardChartJS',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy{

  constructor(private _apiServer:ApiServerService) {}

  getPieServer() {
  this._apiServer.Pie_DB();
  }
  ngOnInit(): void {
    this._apiServer.Pie_DB();
    this.callMethod();
    this.id = window.setInterval(() => { this.callMethod() }, 5000);
  }
  id = 0;
  ngOnDestroy() {
    if (this.id) {
      clearInterval(this.id);
    }
  }
  callMethod(){
    //this.getPieServer()
  }
}
