import { Component, OnInit } from '@angular/core';
import { AssociationCompanyService, resSubject } from "../../services/association-company.service";
import { MatTableDataSource } from "@angular/material/table";
import { DialogUsersCompanyComponent } from "../../dialog-users-company/dialog-users-company.component";
import { MatDialog } from "@angular/material/dialog";
import { DiscoveryService, resAssociationSubject, resPermissionSubject } from "../../services/discovery.service";

@Component({
  selector: 'app-company',
  templateUrl: './users-company.component.html',
  styleUrls: ['./users-company.component.scss']
})
export class UsersCompanyComponent implements OnInit {
  constructor(private _companyService:AssociationCompanyService, private dialog: MatDialog, private _apidiscovery:DiscoveryService) { }

  displayedColumns: string[] = ['email', 'lastname', 'firstname', 'company_id', 'permission', 'association', 'choice'];
  dataSource: any;
  Permission: any;
  Association: any;
  ngOnInit(): void {
    this._companyService.getApi()
    this._apidiscovery.getApiDiscovery()

    resSubject.subscribe(res => {
      this.dataSource = new MatTableDataSource(res.body)
    })
    resPermissionSubject.subscribe(res => { this.Permission = res.body
    })
    resAssociationSubject.subscribe(res => { this.Association = res.body
    })
  }
  openDialog(Data:any) {
    console.log(Data)
    const dialogRef = this.dialog.open(DialogUsersCompanyComponent, {
      width: '250px',
      data:Data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.updateApiCompany(result.data)
    });
  }

  updateApiCompany(result: any){
    for (let p = 0; p < this.Permission.length; p++) {
      if (result.permission == this.Permission[p].title){
        result.permission = this.Permission[p].id
      }
    }
    for (let p = 0; p < this.Association.length; p++) {
      if (result.association == this.Association[p].title) {
        result.association = this.Association[p].id
      }
    }
    this._companyService.putApi(result);
    setTimeout(() => { this._companyService.getApi() }, 100);
  }
}
