import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import{AddEmployeeComponent} from '../app/components/add-employee/add-employee.component';
import {ListEmployeeComponent} from '../app/components/list-employee/list-employee.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModuleModule } from './Common/material-module/material-module.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DialogComponent } from './Common/dialog/dialog.component';
import { SnackbarComponent } from './Common/snackbar/snackbar.component';
import { SpinnerComponent } from './Common/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    ListEmployeeComponent,
    DialogComponent,
    SnackbarComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
