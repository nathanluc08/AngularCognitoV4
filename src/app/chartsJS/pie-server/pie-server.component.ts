import { Component, OnInit } from '@angular/core';
import { resSubject } from "../../services/api-server.service";
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
              backgroundColor: [colorpieserver[0],colorpieserver[1]],
              fill: false,
              borderWidth: 1,
            },
          ]
        },
      });
    });
  }

  ngOnInit(): void {
    this.getPieServer()
  }
}
