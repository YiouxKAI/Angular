import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  //templateUrl: './my-component.component.html',
  template:`<h1>Welcome Hello Angular!!</h1>

  <button class="btn btn-danger">Click Me</button>
  
  `,
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
