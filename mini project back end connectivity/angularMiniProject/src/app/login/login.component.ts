import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from '../model/employee';
import { CommonServiceService } from '../shared/common-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb:FormBuilder,private router:Router,private ser:CommonServiceService) { }

  empList:Employee[];
  msg:string;

  emp1:Employee;
  emp:Employee={
    id: 0,
    ename: '',
    mobileno: '',
    email: '',
    designation: '',
    username: '',
    password: undefined,
    gender: ''
  };

 

  ngOnInit(): void {

    this.ser.getAllData().subscribe(list=>
    {this.empList=list}  )
  }

  logForm=this.fb.group(
    
    {
      username:['',Validators.required],
      password:['',Validators.required],
    

    }
  )



  toLogin()
  { 
    if(this.logForm.valid)
    {
    let uname:string=this.logForm.get('username').value;
    let pass:string=this.logForm.get('password').value;
    this.emp.username=uname;
    this.emp.password=pass;

 
  this.ser.loginCheck(this.emp).subscribe(data=>{this.emp1=data} )
  
 console.log(this.emp1);
  if(this.emp1!=null)
  {
    this.router.navigate(['login/header']);

  }
  else
  {
    this.msg="Invalid Username or Password";
  }




  }
}
}
