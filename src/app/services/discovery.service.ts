import { Injectable } from '@angular/core';
import { CognitoService } from "./cognito.service";
import { HttpClient } from "@angular/common/http";
import { Subject } from "rxjs";

export const resAssociationSubject = new Subject<any>();
export const resPermissionSubject = new Subject<any>();
@Injectable({
  providedIn: 'root'
})
export class DiscoveryService {
  constructor(private cognitoService: CognitoService, private _http: HttpClient) {
  }
  public getApiDiscovery() {
      this._http.get("https://apidev.cartesoft.lu/discovery/setup/permission").subscribe(res => {
        resPermissionSubject.next(res);
      })
      this._http.get("https://apidev.cartesoft.lu/discovery/setup/association").subscribe(res => {
        resAssociationSubject.next(res);
      })
  }
}
