import{TestBed,inject} from '@angular/core/testing';
import{HttpClientModule,HttpClient,HttpResponse}from'@angular/common/http';
import{HttpClientTestingModule,HttpTestingController}from'@angular/common/http/testing';

import{EmployeeService} from'../employees/employee.service';
import{Employee}from 'src/models/employee.model';
import{Department}from'src/models/department.model';
import { Subscriber } from 'rxjs';

let service:EmployeeService;
let httpMock:HttpClientModule;

beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations:[EmployeeService],
    imports:[HttpClientModule]
  });
  httpMock=TestBed.get(HttpTestingController);
  service=TestBed.get(EmployeeService);
});

it('it is created',()=>{
expect(EmployeeService).toBeTruthy();
});


it('get all emp from server',()=>{
const mockemp:Employee[]=[
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
  }
];
// service.getEmployees().subscribe(res=>{
// expect(res.length).toBe(1);
//   }); 
});
