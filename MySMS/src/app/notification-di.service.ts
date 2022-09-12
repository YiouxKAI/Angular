
import { SMSDIService } from './smsdi.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'root'
})

export class NotificationDIService {



  showMessage(){
    return this.smsDIService.sendMessage();
  }
  constructor(private smsDIService:SMSDIService) { 
    this.smsDIService=smsDIService;
  }
}
