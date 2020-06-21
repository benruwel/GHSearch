import { RepoModel } from './../../repo-class/repo.model';
import { Users } from './../../user-class/user.model';
import { Component, OnInit } from '@angular/core';
import { UserRequestService } from 'src/app/services/user-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  repo$ : RepoModel[] = []
  user$ : Users
  username : string;


  constructor(private userRequestService : UserRequestService) { }

  ngOnInit(): void {
    
  }

  searchUsername() {
    this.userRequestService.updateUsername(this.username);
    this.userRequestService.getUserInfo()
    this.user$ = this.userRequestService.user;
    
    this.userRequestService.getRepoInfo().subscribe((data : any) => {
      this.repo$ = data
      console.log(data);
    })
  }

}
