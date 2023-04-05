import { Component, OnInit } from '@angular/core';
import { ApiServerService } from "../../services/api-server.service";
import { ApiDatabasesService } from "../../services/api-databases.service";

@Component({
  selector: 'app-dashboard-server',
  templateUrl: './dashboard-server.component.html',
  styleUrls: ['./dashboard-server.component.scss']
})
export class DashboardServerComponent implements OnInit {

  constructor(private _apiServer:ApiServerService, private _apiDatabases:ApiDatabasesService) { }

  ngOnInit(): void {
    this._apiServer.getApi();
    this._apiDatabases.getApi();
  }

}
