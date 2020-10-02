import { Component, OnInit, Output, Inject, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  @Output() returnList: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private employeeService: EmployeeServicesService,
  ) {}
  list: any;
  ngOnInit(): void {
  }

  async delete() {
    this.employeeService.DeleteEmployee(this.data.id).subscribe((res) => {
      console.log(res);
    });
    await this.employeeService.employeeList().subscribe(x=>{
      this.list = x;
      this.returnList.emit(x);
    })
    
  }
}
