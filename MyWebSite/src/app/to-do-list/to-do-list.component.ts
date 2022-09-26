import { compilePipeFromMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ToDoListService } from '../to-do-list.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  items:any=[];

  onDel(id:any){
    console.log(id);
    if(confirm("Are you sure?")){
      this.service.DeleteData(id)
      .subscribe(res=>{
        console.log(res);
        this.reLoad();
      })
    }
  }

  reLoad():void{
    this.service.listData()
    .subscribe(res=>{
      console.log(res);
      this.items=res;
    })
  }

  constructor(private service:ToDoListService) {
    this.reLoad();
  }

  ngOnInit(): void {
  }

}
