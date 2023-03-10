import { Component, OnInit } from '@angular/core';
import { resSubject } from "../../services/api-server.service";

@Component({
  selector: 'app-pie-dbbackup-GoogleCharts',
  templateUrl: './pie-dbbackup-GoogleCharts.html',
  styleUrls: ['./pie-dbbackup-GoogleCharts.scss']
})
export class PieDbbackupGoogleCharts implements OnInit {
  backpiedbbackupgc: any[] = [];
  countpiedbbackupgc: any[] = [];
  colorpiedbbackupgc: any[] = [];
  chartGCBack: any = {};
  constructor() {}
  ngOnInit(): void {
    this.chartGCDBBack()
    this.getDataGCBack()
  }
  chartGCDBBack(){
    this.chartGCBack = {
      type: 'PieChart',
      data: [
        [this.backpiedbbackupgc[0], this.countpiedbbackupgc[0]],
        [this.backpiedbbackupgc[1], this.countpiedbbackupgc[1]],
        [this.backpiedbbackupgc[2], this.countpiedbbackupgc[2]],
        [this.backpiedbbackupgc[3], this.countpiedbbackupgc[3]],
      ],
      width: 1000,
      height: 270,
      options: {
        pieHole: 0.5,
        colors: [this.colorpiedbbackupgc[0], this.colorpiedbbackupgc[1], this.colorpiedbbackupgc[2], this.colorpiedbbackupgc[3]],
      }
    };
  }
  getDataGCBack() {
    resSubject.subscribe(res => {
      this.backpiedbbackupgc = res.body.pie_db_backup.map((test: any) => test.back);
      this.countpiedbbackupgc = res.body.pie_db_backup.map((test: any) => test.count);
      this.colorpiedbbackupgc = res.body.pie_db_backup.map((test: any) => test.Color);
      this.chartGCDBBack()
    });
  }
}
