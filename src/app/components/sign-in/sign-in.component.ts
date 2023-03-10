import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { CognitoService } from 'src/app/services/cognito.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  user: any;
  alertMessage: string = '';
  showAlert: boolean = false;
  isLoading: boolean = false;
  constructor( private router: Router, private cognitoService: CognitoService) {}

  ngOnInit(): void {
    this.user = {} as User;
    console.log('ngOnInit');
  }

  signInWithCognito() {
    console.log('signInWithCognito');
    if (this.user && this.user.email && this.user.password) {
      this.cognitoService.signIn(this.user)
      .then(() => {
        this.router.navigate(['/navbar']);
      })
      .catch((error:any) => {
        this.displayAlert(error.message);
      })
    }
    else{
      this.displayAlert("Please enter a valid email or password");
    }
  }

  private displayAlert(message: string) {
    this.alertMessage = message;
    this.showAlert = true;
  }

  load() {
    this.isLoading = true;
    setTimeout(() => this.isLoading = false, 3000);
  }
}
