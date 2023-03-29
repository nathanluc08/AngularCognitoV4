import { Component, OnInit } from '@angular/core';
import {ApiDashboardService, resSubject} from "../../services/api-dashboard.service";

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-list-server',
  templateUrl: './list-dashboard.component.html',
  styleUrls: ['./list-dashboard.component.scss']
})
export class ListDashboardComponent implements OnInit {

  listserver: any[] =[];
  constructor(private _apiServer:ApiDashboardService) { }

  ngOnInit(): void {
    this.getListServer()
  }

  getListServer() {
    this._apiServer.getApi()
    resSubject.subscribe(res => {
      let nameserver = res.body.graph_db_size.map((test: any) => test.Name);

      this.listserver = Array.from(new Set(nameserver));
      console.log(this.listserver)

    })
  }
}
