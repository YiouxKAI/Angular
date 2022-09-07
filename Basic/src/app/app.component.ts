import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ALOHA Angular';
  data='Welcome My Homepage';

  onChange(){
    console.log("Changed!!");
  }
}
