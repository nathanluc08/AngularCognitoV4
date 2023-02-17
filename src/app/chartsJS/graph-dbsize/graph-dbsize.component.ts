import { Component, OnInit } from '@angular/core';
import { resSubject } from "../../services/api-server.service";
import { Chart } from "chart.js";

@Component({
  selector: 'app-graph-dbsize',
  templateUrl: './graph-dbsize.component.html',
  styleUrls: ['./graph-dbsize.component.scss']
})
export class GraphDBSizeComponent implements OnInit {
  chartDBSize: any = [];

  getGraphDBSize() {
    resSubject.subscribe(res => {
      let dategraphsize = res.body.graph_db_size.map((test: any) => test.date_trunc);
      let sizegraphsize = res.body.graph_db_size.map((test: any) => test.Size);
      let namegraphsize = res.body.graph_db_size.map((test: any) => test.Name);
      let uuidgraphsize = res.body.graph_db_size.map((test: any) => test.db_uuid);

      let sizegraphsize1 = [];
      let sizegraphsize2 = [];
      let sizegraphsize3 = [];
      let sizegraphsize4 = [];
      let sizegraphsize5 = [];
      let namegraphsize1 = [];

      for(let i=0; i<(namegraphsize.length) + 1; i++)
      {
        if (uuidgraphsize[i] == "07abc826-64c0-48c5-8749-c4d080807b2a")
        {
          sizegraphsize1[i] = (sizegraphsize[i] / 1048576)
          namegraphsize1[1] = namegraphsize[i];
        }
        if (uuidgraphsize[i] == "1895a5ad-3fbe-4e51-a2be-e2bcba7771fc")
        {
          sizegraphsize2[i] = (sizegraphsize[i] / 1048576)
          namegraphsize1[2] = namegraphsize[i];
        }
        if (uuidgraphsize[i] == "f9d2442d-1e3b-43b2-aa0d-b418309a4b54")
        {
          sizegraphsize3[i] = (sizegraphsize[i] / 1048576)
          namegraphsize1[3] = namegraphsize[i];
        }
        if (uuidgraphsize[i] == "c2ba5d87-fab3-4ac7-b7a6-8eb9dc3b7392")
        {
          sizegraphsize4[i] = (sizegraphsize[i] / 1048576)
          namegraphsize1[4] = namegraphsize[i];
        }
        if (uuidgraphsize[i] == "67045c03-4a02-429f-bace-25d87c559fb3")
        {
          sizegraphsize5[i] = (sizegraphsize[i] / 1048576)
          namegraphsize1[5] = namegraphsize[i];
        }
      }

      this.chartDBSize = new Chart('canvasDBSize', {
        type: 'line',
        data: {
          labels: dategraphsize,
          datasets:[
            {
              label: namegraphsize1[1],
              data: sizegraphsize1,
              borderColor: '#FF0000',
              fill: false,
              borderWidth: 1,
              lineTension: 10,
            },
            {
              label: namegraphsize1[2],
              data: sizegraphsize2,
              borderColor: '#0000FF',
              fill: false,
              borderWidth: 1,
              lineTension: 10,
            },
            {
              label: namegraphsize1[3],
              data: sizegraphsize3,
              borderColor: '#00FF00',
              fill: false,
              borderWidth: 1,
              lineTension: 10,
            },
            {
              label: namegraphsize1[4],
              data: sizegraphsize4,
              borderColor: '#e67e22',
              fill: false,
              borderWidth: 1,
              lineTension: 10,
            },
            {
              label: namegraphsize1[5],
              data: sizegraphsize5,
              borderColor: '#FFFF00',
              fill: false,
              borderWidth: 1,
              lineTension: 10,
            },
          ]
        },
        options: {
          maintainAspectRatio: false,
        }
      });
    });
  }

  ngOnInit(): void {
    this.getGraphDBSize()
  }
}
