import { Component, OnInit } from '@angular/core';
import {resSubject} from "../../services/api-server.service";

@Component({
  selector: 'app-pie-dbserver-GoogleCharts',
  templateUrl: './pie-dbserver-GoogleCharts.component.html',
  styleUrls: ['./pie-dbserver-GoogleCharts.component.scss']
})
export class PieDbserverGoogleChartsComponent implements OnInit {
  statuspieServgc: any[] = [];
  countpieServgc: any[] = [];
  colorpieServgc: any[] = [];
  chartGCDBServ: any = {};
  constructor() {}
  ngOnInit(): void {
    this.chartGCServ()
    this.getDataDB()
  }
  chartGCServ(){
    this.chartGCDBServ = {
      type: 'PieChart',
      data: [
        [this.statuspieServgc[0], this.countpieServgc[0]],
        [this.statuspieServgc[1], this.countpieServgc[1]],
      ],
      width: 1000,
      height: 270,
      options: {
        pieHole: 0.5,
        colors: [this.colorpieServgc[0], this.colorpieServgc[1]],
      }
    };
  }
  getDataDB() {
    resSubject.subscribe(res => {
      this.statuspieServgc = res.body.pie_db.map((test: any) => test.Status);
      this.countpieServgc = res.body.pie_db.map((test: any) => test.count);
      this.colorpieServgc = res.body.pie_db.map((test: any) => test.Color);
      this.chartGCServ()
    });
  }
}
