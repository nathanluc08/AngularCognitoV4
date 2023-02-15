import {Injectable, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { CognitoService } from "./cognito.service";
import { Subject } from "rxjs";


export const resSubject = new Subject<any>();
@Injectable({
  providedIn: 'root'
})
export class ApiServerService implements OnInit{


  constructor( private cognitoService: CognitoService, private _http:HttpClient) { }

  public Pie_DB() {
      this.cognitoService.getToken()
        .then(session => {
          let TokenCognito = session.getIdToken().getJwtToken();
          console.log(TokenCognito)
          let httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + TokenCognito
            })
          };
          this._http.get("https://apidev.cartesoft.lu/app/dashboard", httpOptions)
            .subscribe( res => {
                    resSubject.next(res);
            })
        })
  }

  ngOnInit(): void {
  }
}
