import { Component, OnInit } from '@angular/core';
import { resSubject } from "../../services/api-dashboard.service";
import { Chart } from "chart.js";
import { NavigationBarComponent } from "../../components/navigation-bar/navigation-bar.component"

@Component({
  selector: 'app-graph-disk-usage',
  templateUrl: './graph-disk-usage.component.html',
  styleUrls: ['./graph-disk-usage.component.scss']
})
export class GraphDiskUsageComponent implements OnInit {

  chartDiskUsage: any = [];
  notifdiskusage: any[] = [];

  getGraphDiskUsage() {
    resSubject.subscribe(res => {
      let namediskusage = res.body.graph_disk_usage.map((test: any) => test.name);
      let percdiskusage = res.body.graph_disk_usage.map((test: any) => test.perc);
      let sizediskusage = res.body.graph_disk_usage.map((test: any) => test.size);
      let useddiskusage = res.body.graph_disk_usage.map((test: any) => test.used);
      let freediskusage = res.body.graph_disk_usage.map((test: any) => test.free);

      const backgroundcolor = [];
      this.notifdiskusage = namediskusage

      localStorage.setItem('notification', String(this.notifdiskusage))
      // @ts-ignore
      localStorage.setItem('notification', String(localStorage.getItem('notification').concat(",100")))

      for(let i = 0; i < percdiskusage.length; i++) {
        if (percdiskusage[i] < 80) {backgroundcolor.push('green') }
        if (percdiskusage[i] >= 80 && percdiskusage[i] < 90) {backgroundcolor.push('orange') }
        if (percdiskusage[i] >= 90) {backgroundcolor.push('red') }
      }

      this.chartDiskUsage = new Chart('canvasDiskUsage', {
        type: 'horizontalBar',
        data: {
          labels: namediskusage,
          datasets:[
            {
              label: 'Disk Usage',
              data: percdiskusage,
              backgroundColor: backgroundcolor,
            },
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend:{
            labels: {
              fontSize: 18,
            }
          },
          scales:{
            xAxes:[{
              ticks: {
                beginAtZero: true,
                max: 100,
                min: 0
              }
            }]
          },
          tooltips:{
            callbacks:{
              afterLabel: function(tooltipItem) {
                if (tooltipItem.index) {
                  const newLineArray = [];
                  newLineArray.push('Disk Used : ' + (useddiskusage[tooltipItem.index] / 1073741824) + ' Go')
                  newLineArray.push('Disk Free : ' + (freediskusage[tooltipItem.index] / 1073741824) + ' Go')
                  newLineArray.push('Disk Size : ' + (sizediskusage[tooltipItem.index] / 1073741824) + ' Go')
                  return newLineArray;
                }
                else {
                  const newLineArray = [];
                  newLineArray.push('Disk Used : ' + (useddiskusage[0] / 1073741824) + ' Go')
                  newLineArray.push('Disk Free : ' + (freediskusage[0] / 1073741824) + ' Go')
                  newLineArray.push('Disk Size : ' + (sizediskusage[0] / 1073741824) + ' Go')
                  return newLineArray;
                }
              }
            }
          }
        }
      });
    });
  }

  ngOnInit(): void {
    this.getGraphDiskUsage()
  }
}
