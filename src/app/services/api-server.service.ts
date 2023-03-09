import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CognitoService } from "./cognito.service";
import { Subject } from "rxjs";

export const resSubject = new Subject<any>();
@Injectable({
  providedIn: 'root'
})

export class ApiServerService {
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
      this._http.get("https://apidev.cartesoft.lu/app/dashboard", httpOptions).subscribe( res => {
        resSubject.next(res);
        console.log(res)
      })
    })
  }
}
