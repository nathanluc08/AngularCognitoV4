import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CognitoService } from "../../services/cognito.service";
import { BnNgIdleService } from "bn-ng-idle";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent implements OnInit {

  ExpirationTime = 1200000; // 8H = 28800000 // 10S = 10000
  CheckInterval = 10000; // 60S
  constructor(private router: Router, private cognitoService: CognitoService, private bnIdle: BnNgIdleService) {}

  ngOnInit(): void {
    this.getUserDetails();
    this.initInterval();
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
    this.bnIdle.startWatching(30).subscribe((isTimedOut: Boolean) => {
      if (isTimedOut) {
        console.log('session expired');
        this.bnIdle.stopTimer();
        this.router.navigate(['/sign-in']);
      }
    })
  }

  initInterval() {
    setInterval(() => {
      this.check();
    }, this.CheckInterval);
  }

  check() {
    const DateNow = Date.now();
    let TimeAtConnection = Number(localStorage.getItem('TimeAtConnection'))
    console.log(TimeAtConnection)
    let Timeout = TimeAtConnection + this.ExpirationTime - DateNow;
    console.log(Timeout)
    if (Timeout < 0)  {
      this.Idle()
    }
  }
}
