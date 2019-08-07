import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{RouterModule,Routes}from'@angular/router';
import{FormsModule}from'@angular/forms'

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee/create-employee.component';
import{DetailsEmployeeComponent}from'./employees/details-employee/details-employee.component';
import{EmployeeService}from'src/app/employees/employee.service';
import { Employee } from 'src/models/employee.model';

const appRoute:Routes=[
  { path: 'list', component:ListEmployeesComponent},
  { path: 'create', component:CreateEmployeeComponent}, 
  {path:'details',component:DetailsEmployeeComponent},
   { path: '', redirectTo:'/list',pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    DetailsEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
