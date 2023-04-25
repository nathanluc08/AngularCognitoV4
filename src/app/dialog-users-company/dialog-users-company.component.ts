import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-edit-dialog',
  templateUrl: './dialog-users-company.component.html',
  styleUrls: ['./dialog-users-company.component.scss']
})
export class DialogUsersCompanyComponent implements OnInit {

  Data:any;
  constructor(public dialogRef: MatDialogRef<DialogUsersCompanyComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.Data = data;
    console.log(this.Data);
  }
  ngOnInit(): void {
    console.log(this.Data)
  }
  doAction(permission:any, association:any){
    this.Data.permission = permission
    this.Data.association = association
    console.log(this.Data)
    this.dialogRef.close({data:this.Data});
  }
  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }
}
