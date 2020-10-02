import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeServicesService } from 'src/app/services/employee-services.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SnackbarComponent } from 'src/app/Common/snackbar/snackbar.component';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {
  durationInSeconds=2;

  constructor(private activatedroute:ActivatedRoute,private empService:EmployeeServicesService,private router:Router,private snackBar:MatSnackBar) { }
  editId:any;
  employee:any;
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  empform=new FormGroup({
    id: new FormControl(""),
    firstName:new FormControl(''),
    lastName:new FormControl(''),
    salary:new FormControl(''),
    designation:new FormControl('')
  });

  ngOnInit(): void {
    this.editId=+this.activatedroute.snapshot.params.id;
    if(this.editId){
      this.empService.GetEmployeeById(this.editId).subscribe(res=>{
        this.empform.setValue({
          id: res.id,
          firstName: res.firstName,
          lastName: res.lastName,
          salary: res.salary,
          designation: res.designation
        })
      })
    }
  }
 

  onSubmit():void{
    if(!this.editId){
        this.empService.addemployee(this.empform.value).subscribe(res=>{
        this.router.navigate(['/list']);
      })
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        data:{message:"Record Added"}
      });
    }
    else{
      this.empService.updateEmployee(this.empform.value).subscribe(res=>{
        this.router.navigate(['/list']);
      })
      this.snackBar.openFromComponent(SnackbarComponent, {
        duration: this.durationInSeconds * 1000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        data:{message:"Record Updated"}
      });
    }
     
  }
}
