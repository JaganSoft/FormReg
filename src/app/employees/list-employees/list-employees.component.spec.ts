import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed, async,fakeAsync,ComponentFixture } from '@angular/core/testing';
import{ListEmployeesComponent} from 'src/app/employees/list-employees/list-employees.component';
import { Employee } from 'src/models/employee.model';
import { FormsModule } from '@angular/forms';
import{EmployeeService}from'../employee.service';

let component:    ListEmployeesComponent;
let fixture: ComponentFixture<ListEmployeesComponent>;
let service: EmployeeService;

describe('ListEmployeesComponent',()=>{
TestBed.configureTestingModule({
    declarations:[ListEmployeesComponent],
    imports:[FormsModule],
    schemas: [ NO_ERRORS_SCHEMA ]
});
 fixture=TestBed.createComponent(ListEmployeesComponent);
 component=fixture.componentInstance;
 service=TestBed.get(EmployeeService);
});

it('should be initialized',()=>{
expect(fixture).toBeDefined();
expect(component).toBeDefined();
});
it('should not have any employeelist before ngOnInit',()=>{
expect(component.employees.length).toBe(0,'emplist is empty before ngonInit');
});