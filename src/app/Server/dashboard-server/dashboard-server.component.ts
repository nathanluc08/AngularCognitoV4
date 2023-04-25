import { Component, OnDestroy, OnInit } from '@angular/core';
import { ApiServerService } from "../../services/api-server.service";
import { ApiDatabasesService } from "../../services/api-databases.service";

@Component({
  selector: 'app-dashboard-server',
  templateUrl: './dashboard-server.component.html',
  styleUrls: ['./dashboard-server.component.scss']
})
export class DashboardServerComponent implements OnInit, OnDestroy{

  id = 0;
  constructor(private _apiServer:ApiServerService, private _apiDatabases:ApiDatabasesService) { }

  ngOnInit(): void {
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
    this._apiDatabases.getApi();
  }
}
