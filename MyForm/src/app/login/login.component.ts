import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm={
    Username:"",
    Password:"",
    Iagree:false
  }

  /* onSubmit(){
    console.log("Submit!!");
    console.log(this.myForm);
    
  } */

  onSubmit(x:any){
    if(x.invalid)
      alert('Invalid');
    else{
      console.log("Submit!!");
      console.log(x.form);
      console.log(x.value);
    }
    

    
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
