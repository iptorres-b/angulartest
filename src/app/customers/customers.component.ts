import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private customerService: CustomersService) {
    
   }
   enterData: any;

  ngOnInit(): void {
    this.getEnterDatas();
  }
  getEnterDatas(){
    this.enterData = this.customerService.getCustomers();
  }

}
