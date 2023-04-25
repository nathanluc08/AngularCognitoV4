import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CognitoService } from "../../services/cognito.service";
import { BnNgIdleService } from "bn-ng-idle";
import { ApiUserStatusService, resSubject } from "../../services/api-userstatus.service";
import { NotificationsService } from "../../services/notifications.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent implements OnInit {

  ExpirationTime = 28800000; // 8H = 28800000 // 100S = 100000
  CheckInterval = 60000; // 60S = 60000 // 10S = 10000
  intervalID: any;
  notification: any[] = [];
  permission: boolean = false;
  constructor(private router: Router, private _apiuserstatus:ApiUserStatusService, private cognitoService: CognitoService, private bnIdle: BnNgIdleService, public notificationsService: NotificationsService) {}

  ngOnInit(): void {
    this.getUserDetails();
    this.initInterval();
    this.getPermission();
  }

  private getUserDetails() {
    this.cognitoService.getUser()
      .then((user: any) => {
        if (user) {}
        else {
          this.router.navigate(['/sign-in'])
        }
      })
  }

  signOutWithCognito() {
    this.cognitoService.signOut().then(() => {
        this.router.navigate(['/sign-in'])
    })
  }

  Idle(){
    this.bnIdle.startWatching(60).subscribe((isTimedOut: Boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        this.router.navigate(['/sign-in']).then(r => this.bnIdle.stopTimer());
      }
    })
  }

  initInterval() {
    this.intervalID = setInterval(() => {
      this.check();
    }, this.CheckInterval);
  }

  stop(){
    clearInterval(this.intervalID);
  }

  check() {
    const DateNow = Date.now();
    let TimeAtConnection = Number(localStorage.getItem('TimeAtConnection'))
    console.log(TimeAtConnection)
    let Timeout = TimeAtConnection + this.ExpirationTime - DateNow;
    console.log(Timeout)
    if (Timeout < 0)  {
      this.stop()
      this.Idle()
    }
  }

  getPermission(){
    this._apiuserstatus.getApi();
    resSubject.subscribe(res => {
      if (res.body.owner) {
        this.permission = true
      }
      else if (res.body.admin) {
        this.permission = true
      }
      else {
        this.permission = false
      }
    })
  }
}
