import { Component, OnInit } from '@angular/core';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from 'src/app/Common/dialog/dialog.component';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss'],
})
export class ListEmployeeComponent implements OnInit {
  list: any;
  Employee: any;
  deleteid: any;
  loader=false;
  constructor(
    private employeeService: EmployeeServicesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
  
    this.LoadEmployeeList();
  }
  LoadEmployeeList() {
    this.employeeService.employeeList().subscribe((res: any) => {
      this.loader=true;
      this.list = res;
      
    });
  }
  OpenDialog(id: any) {
    let dialogRef = this.dialog.open(DialogComponent, {
      data: { id: id },
    });

    const sub = dialogRef.componentInstance.returnList.subscribe(
      (data: any) => {
        this.list = data;
      }
    );
  }
}
