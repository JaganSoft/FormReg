import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import{Department} from'src/models/department.model';
import{Employee}from 'src/models/employee.model';
import{EmployeeService}from'src/app/employees/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private empservice:EmployeeService) { }
  employee:Employee={
    empId:null,
    empName:null,
    gender:null,
    email:null,
    mobno:null,
    contactPreference:null,
    dob:null,
    department:null,
    isActive:null,
    photoPath:null
  };
  departments:Department[]=[
  {id:1,name:"IT"},
  {id:2,name:"HR"},
  {id:3,name:"Account"},
  {id:4,name:"Finance"}
  ];
  gender="Male";
  ngOnInit() {
  }
  saveEmployee():void{
    this.empservice.saveEmployee(this.employee);
  }
  // saveEmployee(empform:Employee):void{
  //   let str1=empform.photoPath.substr(14);
  //   let str2="assets/images/";
  //   empform.photoPath=str2.concat(str1);
  //   console.log(empform);
  // }
}
