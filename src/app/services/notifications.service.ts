import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  OldNotification: any = [];

  setNotification(notification: any = []) {
    this.OldNotification = []
    if(notification){
      for(let i= 0; i < (notification.length); i++){
        this.OldNotification.push(notification[i]);
      }
    }

    if(this.getNotification()){
      for(let i= 0; i < (this.getNotification().length); i++){
        this.OldNotification.push(this.getNotification()[i]);
      }
    }
    localStorage.setItem('notification', JSON.stringify(this.OldNotification))
  }

  getNotification() {
      // @ts-ignore
    return JSON.parse(localStorage.getItem('notification'))
  }

  afficheNotification() {
    if (localStorage.getItem('notification') == null){
      return ["Aucune Notifications"]
    }
    else{
      // @ts-ignore
      return JSON.parse(localStorage.getItem('notification'))
    }
  }

  clearNotification() {
    localStorage.removeItem('notification');
  }
}

// A Utiliser Pour Ajouter Une Notification

  // Pour Le Constructeur : "constructor (private notificationsService: NotificationsService) {}"

  // Pour Un Tableau : "this.notificationsService.setNotification(namediskusage)"
  // Pour Un String : "this.notificationsService.setNotification(["namediskusage"])"
