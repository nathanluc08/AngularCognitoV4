import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from "@angular/router";
import { CognitoService } from "../../services/cognito.service";
import {ApiServerService} from "../../services/api-server.service";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private router: Router, private cognitoService: CognitoService, private breakpointObserver: BreakpointObserver, private _apiServer:ApiServerService) {
  }

  ngOnInit(): void {
    this.getUserDetails();
  }

  private getUserDetails() {
    this.cognitoService.getUser()
      .then((user: any) => {
        if (user) {
          //logged in
          //console.log(user);
        } else {
          //if not logged in, send them to sign-in
          this.router.navigate(['/sign-in'])
        }
      })
  }

  signOutWithCognito() {
    this.cognitoService.signOut()
      .then(() => {
        this.router.navigate(['/sign-in'])
      })
  }
}
