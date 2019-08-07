import { Component, OnInit,Input } from '@angular/core';
import {Employee}from'src/models/employee.model';
@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {
@Input() employee:Employee;
  constructor() { }

  // emp:Employee={
  //   empId:this.employee.empId,
  //   empName:this.employee.empName,
  //   gender:this.employee.gender,
  //   email:this.employee.email,
  //   mobno:this.employee.mobno,
  //   contactPreference:this.employee.contactPreference,
  //   dob:this.employee.dob,
  //   department:this.employee.department,
  //   isActive:this.employee.isActive,
  //   photoPath:this.employee.photoPath   
  // }
  ngOnInit() {
  }

}
