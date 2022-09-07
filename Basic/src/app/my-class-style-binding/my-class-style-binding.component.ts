import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-class-style-binding',
  templateUrl: './my-class-style-binding.component.html',
  styleUrls: ['./my-class-style-binding.component.css']
})
export class MyClassStyleBindingComponent implements OnInit {

  classStyle="btn btn-primary";
  isDanger:boolean=false;

  toggle(){
    this.isDanger=!this.isDanger;
  }

  textColor="red";
  bgColor="green";

  isRed=true;


  constructor() { }

  ngOnInit(): void {
  }

}
