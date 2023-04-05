import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { resSubject } from "../../services/api-databases.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-table-databases',
  templateUrl: './table-databases.component.html',
  styleUrls: ['./table-databases.component.scss']
})
export class TableDatabasesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;
  displayedColumns: string[] = ['uuid', 'hostname', 'name', 'status', 'version', 'role', 'type', 'lastseen', 'create', 'backupdump', 'backupcontinuous', 'backupstandby'];
  dataSource: any;
  ngOnInit(): void {
    resSubject.subscribe(res => {
      this.dataSource = new MatTableDataSource(res.body);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }
}
