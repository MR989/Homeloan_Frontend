import { EligibilityCalculatorComponent } from './eligibility-calculator/eligibility-calculator.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  active1:string="";
  active2:string="";
 
  constructor() { }

  ngOnInit(): void {
  }

  eligibilityActive()
  {
    this.active1="active";
    this.active2="";
    
  }
  emiCal()
  {
    this.active1="";
    this.active2="active";
    
  }

}
