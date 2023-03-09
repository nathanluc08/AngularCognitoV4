import { Component, OnInit } from '@angular/core';
import { ApiServerService, resSubject } from "../../services/api-server.service";
import { Chart } from "chart.js";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-graph-dbsize2',
  templateUrl: './graph-dbsize2.component.html',
  styleUrls: ['./graph-dbsize2.component.scss']
})
export class GraphDBSize2Component implements OnInit {
  dategraphdbsize1: any[] = [];
  dategraphdbsize1combo: any[] = [];
  chartDBSize2: any = [];
  filteredOptions: any;
  formGroup : FormGroup | any ;
  constructor(private fb : FormBuilder, private _apiServer:ApiServerService){}
  initForm(){
    this.formGroup = this.fb.group({
      'Date' : ['']
    })
    this.formGroup.get('Date').valueChanges.subscribe((response: string) => {
      console.log('data is ', response);
      if(response && response.length){
        this.filterData(response);
      } else {
        this.filteredOptions = [];
      }
    })
  }
  filterData(enteredData: string){
    this.filteredOptions = this.dategraphdbsize1combo.filter(item => {
      return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1
    })
  }

  onSelFunc(item: any){
    this._apiServer.getApi();
    this.getGraphDBSize2(item);
  }

  getGraphDBSize2(item: string) {
    resSubject.subscribe(res => {
      let dategraphdbsize = res.body.graph_db_size.map((test: any) => test.date_trunc);
      let sizegraphdbsize = res.body.graph_db_size.map((test: any) => test.Size);
      let namegraphdbsize = res.body.graph_db_size.map((test: any) => test.Name);
      let uuidgraphdbsize = res.body.graph_db_size.map((test: any) => test.db_uuid);

      let sizegraphdbsize1 = [];
      let sizegraphdbsize2 = [];
      let sizegraphdbsize3 = [];
      let sizegraphdbsize4 = [];
      let sizegraphdbsize5 = [];
      let namegraphdbsize1 = [];
      this.dategraphdbsize1 = [];

      for (let i = 0; i < (uuidgraphdbsize.length); i++) {

        this.dategraphdbsize1combo[i] = dategraphdbsize[i].substr(0, 10)

        if (dategraphdbsize[i].indexOf(item) != -1) {
          if (uuidgraphdbsize[i] == "07abc826-64c0-48c5-8749-c4d080807b2a") {
            sizegraphdbsize1[i] = (sizegraphdbsize[i] / 1048576)
            namegraphdbsize1[1] = namegraphdbsize[i]
          }
          if (uuidgraphdbsize[i] == "1895a5ad-3fbe-4e51-a2be-e2bcba7771fc") {
            sizegraphdbsize2[i] = (sizegraphdbsize[i] / 1048576)
            namegraphdbsize1[2] = namegraphdbsize[i]
          }
          if (uuidgraphdbsize[i] == "f9d2442d-1e3b-43b2-aa0d-b418309a4b54") {
            sizegraphdbsize3[i] = (sizegraphdbsize[i] / 1048576)
            namegraphdbsize1[3] = namegraphdbsize[i]
          }
          if (uuidgraphdbsize[i] == "c2ba5d87-fab3-4ac7-b7a6-8eb9dc3b7392") {
            sizegraphdbsize4[i] = (sizegraphdbsize[i] / 1048576)
            namegraphdbsize1[4] = namegraphdbsize[i]
          }
          if (uuidgraphdbsize[i] == "67045c03-4a02-429f-bace-25d87c559fb3") {
            sizegraphdbsize5[i] = (sizegraphdbsize[i] / 1048576)
            namegraphdbsize1[5] = namegraphdbsize[i]
          }
          this.dategraphdbsize1[i] = dategraphdbsize[i]
        }
      }

      this.dategraphdbsize1.filter(element => element)
      this.dategraphdbsize1 = Array.from(new Set(this.dategraphdbsize1));
      this.dategraphdbsize1.shift()
      this.dategraphdbsize1combo = Array.from(new Set(this.dategraphdbsize1combo));

      this.chartDBSize2 = new Chart('canvasDBSize2', {
        type: 'line',
        data: {
          labels: this.dategraphdbsize1,
          datasets: [
            {
              label: namegraphdbsize1[1],
              data: sizegraphdbsize1.filter(element => element),
              borderColor: '#FF0000',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphdbsize1[2],
              data: sizegraphdbsize2.filter(element => element),
              borderColor: '#0000FF',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphdbsize1[3],
              data: sizegraphdbsize3.filter(element => element),
              borderColor: '#00FF00',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphdbsize1[4],
              data: sizegraphdbsize4.filter(element => element),
              borderColor: '#e67e22',
              fill: false,
              borderWidth: 1,
            },
            {
              label: namegraphdbsize1[5],
              data: sizegraphdbsize5.filter(element => element),
              borderColor: '#FFFF00',
              fill: false,
              borderWidth: 1,
            },
          ]
        },
        options: {
          maintainAspectRatio: false,
          legend: {
            labels: {
              fontSize: 18,
            }
          }
        }
      });
    });
  }
  ngOnInit(): void {
    const Today: Date = new Date();
    const DateToday: string = Today.toISOString().slice(0, 10);
    console.log(DateToday)
    this.getGraphDBSize2(DateToday);
    this.initForm();
  }
}
