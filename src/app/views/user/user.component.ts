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
  public repoCount : number;


  constructor(private userRequestService : UserRequestService) { 
    this.repoCount = 0;
  }

  ngOnInit(): void {
    
  }

  searchUsername() {
    this.userRequestService.updateUsername(this.username);
    this.userRequestService.getUserInfo()
    this.user$ = this.userRequestService.user;
    this.repoCount = this.userRequestService.user.repos_number;

    
    this.userRequestService.getRepoInfo().subscribe((data : any) => {
      this.repo$ = data
    })
  }

}
