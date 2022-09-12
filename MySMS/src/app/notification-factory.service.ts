import { SMSService } from './sms.service';
import { SMSDIService } from './smsdi.service';
import { AASMSService } from './aasms.service';


import { NotificationDIService } from './notification-di.service';

export class NotificationFactoryService {


  static createSMSService():SMSService{
    return new SMSService();
  }

  static createSMSDIService():SMSDIService{
    return new SMSDIService();
  }

  static createAASMSService():AASMSService{
    return new AASMSService();
  }

  static createSMSNotificationService():NotificationDIService{
    return new NotificationDIService(this.createSMSService());
  }
  static createSMSDINotificationService():NotificationDIService{
    return new NotificationDIService(this.createSMSDIService());
  }
  static createAASMSNotificationService():NotificationDIService{
    return new NotificationDIService(this.createAASMSService());
  }

  constructor() { }
}
