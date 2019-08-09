import { Component, OnInit } from '@angular/core';

import{Employee}from 'src/models/employee.model';
import{EmployeeService}from 'src/app/employees/employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  constructor(private empService:EmployeeService) { }

  public employees:Employee[];
  isOnline:boolean;
  msg:any;
  ngOnInit() {
    this.isOnline=navigator.onLine;
    if(this.isOnline){
      this.msg="yes";
      this.employees=this.empService.getEmployees();
    }
    else{
      this.msg="No";
    }

  }
getEmployeeById(empid:number):any{
  let a=0;
  this.employees=[];
  this.employees.push(this.empService.getEmployeeById(empid));
return this.employees;
}
}
