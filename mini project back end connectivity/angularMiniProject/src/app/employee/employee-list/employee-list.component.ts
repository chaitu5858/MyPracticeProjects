
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { CommonServiceService } from 'src/app/shared/common-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  empList:Employee[];
  constructor(private ser:CommonServiceService,private loc:Location) { }

ngOnInit(): void {
  this.ser.getAllData().subscribe(list=>
    {
this.empList=list;
    })
}
deleteData(id:number)
{
  this.ser.deleteDataFromDb(id).subscribe();
 window.location.reload();
  
}

goBack()
{
  this.loc.back()
}

}


