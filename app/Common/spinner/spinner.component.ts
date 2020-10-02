import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {
  @Input() loader:boolean;
  
  constructor() { }

  ngOnInit(): void {
  }
  
}
