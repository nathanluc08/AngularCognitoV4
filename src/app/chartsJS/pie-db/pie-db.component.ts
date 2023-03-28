import { Component, OnInit } from '@angular/core';
import { resSubject } from "../../services/api-dashboard.service";
import { Chart } from "chart.js";

@Component({
  selector: 'app-pie-db',
  templateUrl: './pie-db.component.html',
  styleUrls: ['./pie-db.component.scss']
})
export class PieDBComponent implements OnInit {
  chartDB: any = [];

  getPieDB() {
    resSubject.subscribe(res => {
      let statuspiedb = res.body.pie_db.map((test: any) => test.Status);
      let countpiedb = res.body.pie_db.map((test: any) => test.count);
      let colorpiedb = res.body.pie_db.map((test: any) => test.Color);

      this.chartDB = new Chart('canvasDB', {
        type: 'doughnut',
        data: {
          labels: statuspiedb,
          datasets: [
            {
              data: countpiedb,
              backgroundColor: colorpiedb,
              fill: false,
              borderWidth: 1,
            },
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend:{
            position: 'right',
            align: 'center',
            labels: {
              fontSize: 18,
            }
          },
        }
      });
    });
  }
  ngOnInit(): void {
    this.getPieDB()
  }
}
