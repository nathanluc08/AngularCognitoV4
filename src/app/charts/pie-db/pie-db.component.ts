import {Component, OnInit} from '@angular/core';
import {ApiServerService, resSubject} from "../../services/api-server.service";
import {Chart} from "chart.js";

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

      this.chartDB = new Chart('canvasDB', {
        type: 'doughnut',
        data: {
          labels: statuspiedb,
          datasets: [
            {
              data: countpiedb,
              backgroundColor: [ '#1845ad','#ff512f'],
              fill: false,
              borderWidth: 1,
            },
          ]
        },
        options: {
          plugins: {
            datalabels: {
              color: '#fff',
              display: true,
            },
          },
        }
      });
    });
  }

  ngOnInit(): void {
    this.getPieDB()
  }
}
