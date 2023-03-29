import { Component, OnInit } from '@angular/core';
import {ApiServerService} from "../../services/api-server.service";

@Component({
  selector: 'app-dashboard-server',
  templateUrl: './dashboard-server.component.html',
  styleUrls: ['./dashboard-server.component.scss']
})
export class DashboardServerComponent implements OnInit {

  constructor(private _apiServer:ApiServerService) { }

  ngOnInit(): void {
    this._apiServer.getApi();
  }

}
