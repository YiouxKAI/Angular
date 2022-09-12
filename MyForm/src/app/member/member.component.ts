import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  form:any;

  //依賴注入
  constructor(private fb:FormBuilder) { 
    //模型 model
    this.form=this.fb.group({
      account:['',[Validators.required,Validators.minLength(6)]],  //兩個以上的驗證器，需要自己框[]包起來
      password:['',[Validators.required,Validators.minLength(12)]],

      personal:this.fb.group({
        name:['',[Validators.required]], //即使只有一個驗證器，建議還是加[]
        gender:'2',
        birthday:'',
      }),

      subscription:false,
      email:['',[this.originEmailPattern]]
    })
  }

  //Email的Regular Expresion
  regx= /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

  originEmailPattern=Validators.pattern(this.regx);

  checkSubscription():void{
    if(this.form.controls.subscription.value){
      this.form.controls.email.setValidators([this.originEmailPattern,Validators.required]);
    }else{
      this.form.controls.email.setValidators([this.originEmailPattern]);
    }

    this.form.controls.email.updateValueAndValidity();
  }

  onSubmit(f:any){
    if(f.invalid) console.log("invalid!!");
    else {
      console.log("Submit!!");
      console.log(f);
      console.log(f.value);
      
    }
  }

  ngOnInit(): void {
  }

}
