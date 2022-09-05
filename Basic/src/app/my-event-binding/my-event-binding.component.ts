import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-event-binding',
  templateUrl: './my-event-binding.component.html',
  styleUrls: ['./my-event-binding.component.css']
})
export class MyEventBindingComponent implements OnInit {

  clickMe(){
    alert('EventClick')
  }


  clickMe2($event:any){
    console.log($event);
  }

  myKeyup($event:any){
    // console.log($evnet);
    console.log($event.key);
    console.log($event.code);
    console.log($event.keyCode);
  }

  Mystring:string="";
  myInput($event:any){
    this.Mystring=$event.target.value;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
