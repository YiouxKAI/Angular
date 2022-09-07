import { Component, OnInit } from '@angular/core';
import { SqrtPipe } from './app.sqrt';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  pipeExample={
    date:new Date(),
    title:"Welcome to my Angular Homepage!!",
    number:123.456789,
    percent:0.0253,
    numArray:["1","2","3","4","5","6","7","8","9","0"]
  }

  

  constructor() { }

  ngOnInit(): void {
  }

}
