import { Component, OnInit } from '@angular/core';
import { ApiUserService, resSubject } from "../../services/api-user.service";
import { Location } from '@angular/common';
@Component({
  selector: 'app-profiles',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class ProfilesComponent implements OnInit {

  alertTitre: string = '';
  alertMessage: string = '';
  showAlert: boolean = false;
  user: any = [];
  constructor(private _apiuser:ApiUserService, private location: Location) { }

  ngOnInit(): void {
    this._apiuser.getApi();
    resSubject.subscribe(res => {
      this.user = res.body;
      console.log(this.user)
    })
  }

  Save(salutation:number, email:string, prenom:string, nom:string, fixe:string, mobile:string, call:number, notification:number, ) {

    if (prenom != "" && nom != "" && mobile != "") {
      this.user.contact_salutation_id = Number(salutation)
      this.user.email = email
      this.user.firstname = prenom
      this.user.lastname = nom
      this.user.phone_number = fixe
      this.user.mobile_number = mobile
      this.user.prefered_call_method = Number(call)
      this.user.prefered_notify_method = Number(notification)

      this._apiuser.putApi(this.user);
      this.location.back();
    }
    else {
      this.displayAlert("Erreur Lors De La Sauvegarde", "Veuillez Remplir Tous Les Champs Requis");
    }
  }

  private displayAlert(messageTitre: string, messageAlert: string) {
    this.alertMessage = messageAlert;
    this.alertTitre = messageTitre;
    this.showAlert = true;
  }
}
