import { Component, OnInit } from '@angular/core';
import {ApiDashboardService, resSubject} from "../../services/api-dashboard.service";

export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-list-server',
  templateUrl: './list-server.component.html',
  styleUrls: ['./list-server.component.scss']
})
export class ListServerComponent implements OnInit {

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

  folders: Section[] = [
    {
      name: 'test',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
}
