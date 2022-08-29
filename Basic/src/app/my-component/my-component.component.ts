import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component', //選擇器 命名名稱
  // templateUrl: './my-component.component.html',
  template:`
  <div class="container">
  <h2 class="alert alert-success mt-4">My Component</h2>
  <h1>Welcome Angular!!</h1>
  <button class="{{btnColor}}">{{title}}</button>
  {{data}}-{{title}}
  </div>
  `, //html的部分
  styleUrls: ['./my-component.component.css'] //css的部分
})
export class MyComponentComponent implements OnInit {

  data=123;
  title="Hello";

  btnColor="btn btn-success"

  constructor() { }

  ngOnInit(): void {
  }

}
