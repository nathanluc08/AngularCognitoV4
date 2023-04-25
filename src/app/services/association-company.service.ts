import { Injectable } from '@angular/core';
import { CognitoService } from "./cognito.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Subject } from "rxjs";

export const resSubject = new Subject<any>();
@Injectable({
  providedIn: 'root'
})
export class AssociationCompanyService {
  constructor( private cognitoService: CognitoService, private _http:HttpClient) { }

  public getApi() {
    this.cognitoService.getToken().then(session => {
      let TokenCognito = session.getIdToken().getJwtToken();
      console.log(TokenCognito);
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + TokenCognito
        })
      };
      this._http.get("https://apidev.cartesoft.lu/app/company/association", httpOptions).subscribe( res => {
        resSubject.next(res);
        console.log(res)
      })
    })
  }

  public putApi(user:any) {
    this.cognitoService.getToken().then(session => {
      let TokenCognito = session.getIdToken().getJwtToken();
      console.log(TokenCognito);
      let httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': 'Bearer ' + TokenCognito
        })
      };
      console.log(user)
      this._http.put("https://apidev.cartesoft.lu/app/company/association", user, httpOptions).subscribe({
        error: error => {
          console.error('There was an error!', error);
        }
      })
    })
  }
}
