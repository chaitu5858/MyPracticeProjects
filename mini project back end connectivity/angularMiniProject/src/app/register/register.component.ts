import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonServiceService } from '../shared/common-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder,private ser:CommonServiceService) { }

  ngOnInit(): void {
  }

  regForm=this.fb.group({

    ename:['',[Validators.required,Validators.minLength(6),Validators.maxLength(10)]],
    mobileno:['',[Validators.required,Validators.pattern("^(91)( )[0-9]{10}$")]],
    email:['',[Validators.required,Validators.pattern("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")]],
    designation:['',Validators.required],
    password:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,15}$")]],
    username:['',[Validators.required,Validators.pattern("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[_]).{6,10}$")]],
    gender:['',Validators.required]

  })

  onSubmit()
  {
    if(this.regForm.valid)
    {
this.ser.saveData(this.regForm.value).subscribe();
window.location.reload();
    }
  }

}
