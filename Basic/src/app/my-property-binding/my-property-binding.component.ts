import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-property-binding',
  templateUrl: './my-property-binding.component.html',
  styleUrls: ['./my-property-binding.component.css']
})
export class MyPropertyBindingComponent implements OnInit {

  imgUrl="http://i1.wp.com/inews.gtimg.com/newsapp_bt/0/3051129012/640"
  myLink="https://www.google.com.tw/?hl=zh_TW"



  imgUrls=[
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111165433.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111165540.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111165620.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111165714.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111165835.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111170022.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111172509.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111172549.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111172622.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20160901165950.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20160902103108.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111172705.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111172738.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151111172911.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151112100534.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151112100803.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151112101036.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151112101316.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151112101601.jpg",
    "https://ezgo.coa.gov.tw/Uploads/opendata/FUNTHEME01/APPLY_D/20151112101904.jpg"
      ]


  constructor() { }

  ngOnInit(): void {
  }

}
