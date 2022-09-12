import { NotificationDIService } from './notification-di.service';
// import { NotificationService } from './notification.service';
import { Component } from '@angular/core';
import { SMSDIService } from './smsdi.service';
import { AASMSService } from './aasms.service';
import { SMSService } from './sms.service';

import { NotificationFactoryService } from './notification-factory.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [
    { provide: NotificationDIService, useClass: NotificationDIService },
    { provide: SMSDIService, useClass: AASMSService }

  ]
})
export class AppComponent {
  title = 'MySMS';

  //這個是非DI的寫法
  /* notificationService:NotificationService;
 
   constructor(){
     this.notificationService=new NotificationService();
   } */

  //這是DI的寫法
  /* notificationService:NotificationDIService;
 
    constructor(){
     this.notificationService=new NotificationDIService(new SMSDIService());
   }
  
   constructor(){
     this.notificationService=new NotificationDIService(new SMSDIService());
   }
   */


  //這是工廠模式
  /*  notificationService:NotificationDIService;
   constructor(){
     this.notificationService=NotificationFactoryService.createSMSDINotificationService();
   } */


  //Injectable的寫法
  notificationService: NotificationDIService;
  constructor(private NotificationDIService: NotificationDIService) {
    this.notificationService = NotificationDIService;
  }



  ngOnInit() {
    this.title = this.notificationService.showMessage();
  }
}
