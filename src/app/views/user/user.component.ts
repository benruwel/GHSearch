import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user-class/user';
import { UserRequestService } from 'src/app/services/user-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user$ : User;
  username : string;


  constructor(private userRequestService : UserRequestService) { }

  ngOnInit(): void {
    
  }

  searchUsername() {
    this.userRequestService.updateUsername(this.username);
    this.userRequestService.getUserInfo()
    this.user$ = this.userRequestService.user;
   console.log(this.username)
  }

}
