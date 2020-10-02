import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService {
url="http://localhost:1210/employees";


  constructor(private _http:HttpClient) { }

  employeeList(){
    return this._http.get(this.url);
  }
  addemployee(data:any){
    return this._http.post<any>(this.url+'/create',data);
  }
  updateEmployee(data:any){
    return this._http.put<any>(this.url+`/${data.id}`,data);
  }
  GetEmployeeById(id:any){
    return this._http.get<any>(this.url+`/${id}`);
  }
  DeleteEmployee(data:any){
    return this._http.delete<any>(this.url+`/${data}`);
  }
}
