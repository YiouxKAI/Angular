import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-twoway-binding',
  templateUrl: './my-twoway-binding.component.html',
  styleUrls: ['./my-twoway-binding.component.css']
})
export class MyTwowayBindingComponent implements OnInit {

  val="ALOHA!!"
  val2=""

  val3=""

  onKeyup(value:string){
    this.val2=value;
    console.log(value)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
