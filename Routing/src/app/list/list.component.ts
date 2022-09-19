import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  nightMarkets=["瑞豐夜市","六合夜市","新堀江商圈","青年夜市","光華夜市"];
  constructor() { }

  ngOnInit(): void {
  }

}
