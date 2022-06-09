import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) { }

  
  enterData: any;

  ngOnInit(): void {
    this.getEnterDatas();
  }
  getEnterDatas(){
    this.enterData = this.userService.getUsers();
  }

}
