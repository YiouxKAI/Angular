import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input('aaaaa') data:any;
  @Output() change=new EventEmitter();

  onClick(){
    this.change.emit();
  }

  constructor() { }

  ngOnInit(): void {
  }

}
