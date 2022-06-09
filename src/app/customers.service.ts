import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor() { }

  public customers =[{
    "id":1,
    "name":"customer1"
  },
  {
    "id":2,
    "name":"customer2"
  }, 
]
getCustomers(){
  return this.customers;
}
}
