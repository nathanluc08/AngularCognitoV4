import { Component, OnInit } from '@angular/core';
import { resSubject } from "../../services/api-dashboard.service";
import { Chart } from "chart.js";

@Component({
  selector: 'app-pie-server',
  templateUrl: './pie-server.component.html',
  styleUrls: ['./pie-server.component.scss']
})
export class PieServerComponent implements OnInit {
  chartServer: any = [];

  getPieServer() {
    resSubject.subscribe(res => {
      let statuspieserver = res.body.pie_server.map((test: any) => test.Status);
      let countpieserver = res.body.pie_server.map((test: any) => test.count);
      let colorpieserver = res.body.pie_server.map((test: any) => test.Color);

      this.chartServer = new Chart('canvasServer', {
        type: 'doughnut',
        data: {
          labels: statuspieserver,
          datasets: [
            {
              data: countpieserver,
              backgroundColor: colorpieserver,
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
          }
        }
      });
    });
  }

  ngOnInit(): void {
    this.getPieServer()
  }
}
