import { Component, OnInit } from '@angular/core';
import { ApiServerService } from "../../services/api-server.service";

@Component({
  selector: 'app-dashboard-GoogleCharts',
  templateUrl: './dashboard-GoogleCharts.component.html',
  styleUrls: ['./dashboard-GoogleCharts.component.scss'],
})
export class DashboardGoogleChartsComponent implements OnInit {
  constructor(private _apiServer:ApiServerService) { }
  ngOnInit(): void {
    this._apiServer.getApi();
  }
}
