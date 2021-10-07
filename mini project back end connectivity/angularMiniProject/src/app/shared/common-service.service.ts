import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  url:string="http://localhost:3000/Employee";

  regUrl:string="http://localhost:8089/addData";

  getUrl:string="http://localhost:8089/getAll";

  delUrl:string="http://localhost:8089/deleteData";

  updateUrl:string="http://localhost:8089/updateData";


  getSpecificDataUrl:String="http://localhost:8089/getByid";

  logCheckUrl:string="http://localhost:8089/findbyUsername";

  constructor(private http:HttpClient) { }

  saveData(emp:Employee):Observable<Employee>
  {

    alert("Your data has been saved !!!");
    return this.http.post<Employee>(this.regUrl,emp);
 
  }

  saveDataNew(emp:Employee)
  {

    return this.http.post<Employee>(this.url,emp);
 
  }

  getAllData():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(this.getUrl)
  }

  deleteDataFromDb(id:number)
  {
   return  this.http.delete(this.delUrl+"/"+id)
  }

  getEmployee(id:number)
  {

    return this.http.get<Employee>(this.getSpecificDataUrl+"/"+id);
  
  }

  updateEmp(emp:Employee)
  {
  
    return this.http.put<Employee>(this.updateUrl,emp);
  }

  loginCheck(emp:Employee):Observable<Employee>
  {
    console.log(emp.username);
    console.log(emp.password);
    return this.http.post<Employee>(this.logCheckUrl,emp);
  }
  
}
