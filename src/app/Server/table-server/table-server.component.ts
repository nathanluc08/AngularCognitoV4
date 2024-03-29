import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { resSubject } from "../../services/api-server.service";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
@Component({
  selector: 'app-table-server',
  templateUrl: './table-server.component.html',
  styleUrls: ['./table-server.component.scss']
})
export class TableServerComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  displayedColumns: string[] = ['uuid', 'hostname', 'ip', 'os', 'version', 'lastseen', 'status', 'create'];
  dataSource: any;
  ngOnInit(): void {
    resSubject.subscribe(res => {
      this.dataSource = new MatTableDataSource(res.body);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
