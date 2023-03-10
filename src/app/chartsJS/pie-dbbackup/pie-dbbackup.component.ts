import { Component, OnInit } from '@angular/core';
import { resSubject } from "../../services/api-server.service";
import { Chart } from "chart.js";

@Component({
  selector: 'app-pie-dbbackup',
  templateUrl: './pie-dbbackup.component.html',
  styleUrls: ['./pie-dbbackup.component.scss']
})
export class PieDBBackupComponent implements OnInit {
  chartDBBackup: any = [];

  getPieDBBackup() {
    resSubject.subscribe(res => {
      let backpiedbbackup = res.body.pie_db_backup.map((test: any) => test.back);
      let countpiedbbackup = res.body.pie_db_backup.map((test: any) => test.count);
      let colorpiedbbackup = res.body.pie_db_backup.map((test: any) => test.Color);

      this.chartDBBackup = new Chart('canvasDBBackup', {
        type: 'doughnut',
        data: {
          labels: backpiedbbackup,
          datasets: [
            {
              data: countpiedbbackup,
              backgroundColor: colorpiedbbackup,
              fill: false,
              borderWidth: 1,
            },
          ]
        },
        options: {
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
    this.getPieDBBackup()
  }
}
