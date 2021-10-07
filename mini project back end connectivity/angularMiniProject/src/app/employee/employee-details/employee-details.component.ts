import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { CommonServiceService } from 'src/app/shared/common-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private ser:CommonServiceService) { }

  employee:Employee;
  ngOnInit(): void {

    this.route.paramMap.subscribe(param1=>
      {
      this.ser.getEmployee(parseInt(param1.get('id'))).subscribe(
        data=>
        this.employee=data
      )
      })
  }

  

}
