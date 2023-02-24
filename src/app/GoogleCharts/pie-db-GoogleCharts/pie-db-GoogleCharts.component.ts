import { Component, OnInit } from '@angular/core';
import {resSubject} from "../../services/api-server.service";

@Component({
  selector: 'app-pie-db-GoogleCharts',
  templateUrl: './pie-db-GoogleCharts.component.html',
  styleUrls: ['./pie-db-GoogleCharts.component.scss']
})
export class PieDbGoogleChartsComponent implements OnInit {
  statuspiedbgc: any[] = [];
  countpiedbgc: any[] = [];
  colorpiedbgc: any[] = [];
  chartGC: any = {};
  constructor() {}
  ngOnInit(): void {
    this.chartGCDB()
    this.getDataDB()
  }
  chartGCDB(){
    this.chartGC = {
      type: 'PieChart',
      data: [
        [this.statuspiedbgc[0], this.countpiedbgc[0]],
        [this.statuspiedbgc[1], this.countpiedbgc[1]],
      ],
      width: 1000,
      height: 270,
      options: {
        pieHole: 0.5,
        colors: [this.colorpiedbgc[0], this.colorpiedbgc[1]],
      }
    };
  }
  getDataDB() {
    resSubject.subscribe(res => {
      this.statuspiedbgc = res.body.pie_db.map((test: any) => test.Status);
      this.countpiedbgc = res.body.pie_db.map((test: any) => test.count);
      this.colorpiedbgc = res.body.pie_db.map((test: any) => test.Color);
      this.chartGCDB()
    });
  }
}
