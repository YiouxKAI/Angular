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

  updateItem:any;
  checked:any;

  myForm={
    Id:0,
    Subject:"",
    Description:"",
    Done:0
  }


  //新增資料
  onSubmit(f:any){
    if(f.invalid){
      console.log("Invalid");
    }else{
      console.log("Submit");
      console.log(f.value);

      //把資料存入資料庫
      this.service.postData(f.value)
      .subscribe(res=>{
        console.log(res);

        this.myForm.Id=0;
        this.myForm.Subject="";
        this.myForm.Description="";
        this.myForm.Done=0;


        this.reLoad();

      })
    }
  }


  onUpdate(uf:any){
    if(uf.invalid){
      console.log("Invalid");
      
    }
    else{
      console.log("Updated!!");
      console.log(uf.value);
      
      //把資料存入資料庫
      this.service.updateData(uf.value)
      .subscribe(res=>{
        console.log(res);

        this.myForm.Id=0;
        this.myForm.Subject="";
        this.myForm.Description="";
        this.myForm.Done=0;

        this.reLoad();
        
      })
      
    }
  }


  getItem(id:any){
    console.log(id);
    this.service.getData(id)
    .subscribe(res=>{
      this.updateItem=res;

      this.myForm.Id=this.updateItem.Id;
      this.myForm.Subject=this.updateItem.Subject;
      this.myForm.Description=this.updateItem.Description;
      this.myForm.Done=this.updateItem.Done;

      if(this.updateItem.Done){
        this.checked="checked";
      }
    })
    
  }

  //刪除資料
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

  //重新抓取資料
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
