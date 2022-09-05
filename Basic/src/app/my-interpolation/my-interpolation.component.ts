import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-interpolation',
  templateUrl: './my-interpolation.component.html',
  styleUrls: ['./my-interpolation.component.css']
})
export class MyInterpolationComponent implements OnInit {
  title="高雄各大夜市"

  nightMarkets=["瑞豐夜市","六合夜市","新崛江夜市","青年夜市","光華夜市"]

  // nightMarketSet:any=[];  //若直接為空，會出錯，定義為any先賦予任意型態，避免有為空的情況產生

  nightMarketSet:any=[
    {id:1,name:"瑞豐夜市"},
    {id:2,name:"六合夜市"},
    {id:3,name:"新崛江夜市"},
    {id:4,name:"青年夜市"},
    {id:5,name:"光華夜市"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
