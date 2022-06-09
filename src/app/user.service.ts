import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
    
  }
  public users =[{
    "id":1,
    "name":"User1"
  },
  {
    "id":2,
    "name":"User2"
  }, 
]
getUsers(){
  return this.users;
}
}
