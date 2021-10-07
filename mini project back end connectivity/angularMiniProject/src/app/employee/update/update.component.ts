import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from 'src/app/shared/common-service.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private fb:FormBuilder,private location:Location,private ser:CommonServiceService) { }
  updateForm:FormGroup;
  
  ngOnInit(): void {
    
    this.updateForm=this.fb.group({

      id:['',Validators.required],
      ename:['',Validators.required],
      mobileno:['',Validators.required],
      email:['',Validators.required],
      designation:['',Validators.required],
      password:['',Validators.required],
      username:['',Validators.required],
      gender:['',Validators.required]
  
    })
    
    this.editData();
  }


editData()
{
  let emp:any=this.location.getState();

  console.log(emp);
  console.log("Id" +emp.id);
  
  if(emp.id!=0)
  {
    console.log("in If"+emp);
    console.log("Id " +emp.id);

    this.updateForm.get('id').setValue(emp.id);
    this.updateForm.get('ename').setValue(emp.ename);
    this.updateForm.get('mobileno').setValue(emp.mobileno);
    this.updateForm.get('email').setValue(emp.email);
    this.updateForm.get('designation').setValue(emp.designation);
    this.updateForm.get('password').setValue(emp.password);
    this.updateForm.get('username').setValue(emp.username);
    this.updateForm.get('gender').setValue(emp.gender);

  }
}

updateData()
{
 
  this.ser.updateEmp(this.updateForm.value).subscribe();
  window.location.reload();
}

}
