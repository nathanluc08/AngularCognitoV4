import { Injectable } from '@angular/core';
import Amplify, { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CognitoService {

  private authenticationSubject: BehaviorSubject<any>;

  constructor() {
    Amplify.configure({
      Auth: environment.cognito
    });

    this.authenticationSubject = new BehaviorSubject<boolean>(false);
  }

  public getUser() : Promise<any> {
    return Auth.currentUserInfo();
  }

  public signIn(user: User) : Promise<any> {
    return Auth.signIn(user.email, user.password);
  }

  public signOut() : Promise<any> {
    return Auth.signOut();
  }
}
