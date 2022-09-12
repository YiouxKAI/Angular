import { SMSService } from './sms.service';


export class NotificationService {

  smsService:SMSService;

  showMessage(){
    return this.smsService.sendMessage();

  }

  constructor() { 
    this.smsService=new SMSService();
  }
}
