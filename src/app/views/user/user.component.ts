import { Users } from './../../user-class/user.model';
import { Repo } from './../../repo-class/repo';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user-class/user';
import { UserRequestService } from 'src/app/services/user-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  repo$ : any;
  user$ : Users
  username : string;


  constructor(private userRequestService : UserRequestService) { }

  ngOnInit(): void {
    
  }

  searchUsername() {
    this.userRequestService.updateUsername(this.username);
    this.userRequestService.getUserInfo()
    this.user$ = this.userRequestService.user;
    
    this.userRequestService.getRepoInfo()
    this.repo$ = this.userRequestService.repos
  }

}
