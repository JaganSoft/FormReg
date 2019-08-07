import { Injectable } from "@angular/core";
import{Employee}from'src/models/employee.model';

@Injectable()
export class EmployeeService{

    private listEmp:Employee[]=[
       
            {   
                empId:101,
                empName:'Mark',
                gender:'Male',
                email:'Mark@gmail.com',
                mobno:7878654345,
                contactPreference:'mail',
                dob:new Date('09/09/1990'),
                department:'IT',
                isActive:true,
                photoPath:'assets/images/image1.jfif'
              },
              {
                empId:102,
                empName:'Angela',
                gender:'Female',
                email:'Angela@gmail.com',
                mobno:9090654565,
                contactPreference:'phone',
                dob:new Date('25/01/1994'),
                department:'HR',
                isActive:true,
                photoPath:'assets/images/image2.jfif'
              },
              {
                empId:103,
                empName:'Jack',
                gender:'Male',
                email:'Jack@gmail.com',
                mobno:9668654235,
                contactPreference:'mail',
                dob:new Date('05/09/1989'),
                department:'IT',
                isActive:true,
                photoPath:'assets/images/image3.jfif'
              }       
    ]

    getEmployees():Employee[]{
        return this.listEmp;
    }
    saveEmployee(employee:Employee):void{
            this.listEmp.push(employee);
    }
    getEmployeeById(empid:number):any{
      this.listEmp.forEach(element => {
        if(element.empId==empid)
        {
          this.listEmp=[];
          return this.listEmp.push(element);
        }
      });
    }
}