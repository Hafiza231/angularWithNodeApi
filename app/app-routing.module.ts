import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { componentFactoryName } from '@angular/compiler';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';

const routes: Routes = [
  {path:'',redirectTo:'list',pathMatch:'full'},
  {path:'add',component:AddEmployeeComponent},
  {path:'list', component:ListEmployeeComponent},
  {path:'edit/:id',component:AddEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
