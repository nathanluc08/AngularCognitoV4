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
      let dategraphsize1 = [];

      let f = -1;
      let t = 0;
      /*
      let listuuid = Array.from(new Set(uuidgraphsize));
      console.log(listuuid)

      //for(let f=0; f<(listuuid.length); f++){
        console.log(uuidgraphsize.length)

        for(let i=0; i<(uuidgraphsize.length); i++){

          console.log(listuuid[f])
          if (uuidgraphsize[i] == "1895a5ad-3fbe-4e51-a2be-e2bcba7771fc") {

            console.log(i)
            sizegraphsize1[t] = (sizegraphsize[i] / 1048576)
            namegraphsize1[1] = namegraphsize[i]
            dategraphsize1[t] = dategraphsize[i].substring(0, 10)
            t++;
          }
        }
        console.log(uuidgraphsize)
      }*/
      for(let i=0; i<(uuidgraphsize.length); i++)
      {
          if (dategraphsize[i].indexOf("T14") != -1 && t == 0){
            t = 1
            f++
          }
          if (uuidgraphsize[i] == "07abc826-64c0-48c5-8749-c4d080807b2a" && (dategraphsize[i].indexOf("T14") != -1)) {
            sizegraphsize1[f] = (sizegraphsize[i] / 1048576)
            namegraphsize1[1] = namegraphsize[i]
            dategraphsize1[f] = dategraphsize[i].substring(0, 10)
          }
          if (uuidgraphsize[i] == "1895a5ad-3fbe-4e51-a2be-e2bcba7771fc" && (dategraphsize[i].indexOf("T14") != -1)) {
            sizegraphsize2[f] = (sizegraphsize[i] / 1048576)
            namegraphsize1[2] = namegraphsize[i]
            dategraphsize1[f] = dategraphsize[i].substring(0, 10)
          }
          if (uuidgraphsize[i] == "f9d2442d-1e3b-43b2-aa0d-b418309a4b54" && (dategraphsize[i].indexOf("T14") != -1)) {
            sizegraphsize3[f] = (sizegraphsize[i] / 1048576)
            namegraphsize1[3] = namegraphsize[i]
            dategraphsize1[f] = dategraphsize[i].substring(0, 10)
          }
          if (uuidgraphsize[i] == "c2ba5d87-fab3-4ac7-b7a6-8eb9dc3b7392" && (dategraphsize[i].indexOf("T14") != -1)) {
            sizegraphsize4[f] = (sizegraphsize[i] / 1048576)
            namegraphsize1[4] = namegraphsize[i]
            dategraphsize1[f] = dategraphsize[i].substring(0, 10)
          }
          if (uuidgraphsize[i] == "a97b59f1-270e-40c3-b01a-025009fd8d7d" && (dategraphsize[i].indexOf("T14") != -1)) {
            sizegraphsize5[f] = (sizegraphsize[i] / 1048576)
            namegraphsize1[5] = namegraphsize[i]
            dategraphsize1[f] = dategraphsize[i].substring(0, 10)
          }
          if (dategraphsize[i].indexOf("T14") == -1){
            t = 0
          }
        }

      this.chartDBSize = new Chart('canvasDBSize', {
        type: 'line',
        data: {
          labels: dategraphsize1,
          datasets:[
            {
              label: namegraphsize1[1],
              data: sizegraphsize1,
              borderColor: '#FF0000',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphsize1[2],
              data: sizegraphsize2,
              borderColor: '#0000FF',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphsize1[3],
              data: sizegraphsize3,
              borderColor: '#00FF00',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphsize1[4],
              data: sizegraphsize4,
              borderColor: '#e67e22',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphsize1[5],
              data: sizegraphsize5,
              borderColor: '#FFFF00',
              fill: false,
              borderWidth: 1,
            },
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend:{
            labels: {
              fontSize: 18,
            }
          }
        }
      });
    });
  }

  ngOnInit(): void {
    this.getGraphDBSize()
  }
}
