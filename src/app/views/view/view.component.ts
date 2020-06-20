import { User } from './../../user-class/user';
import { Component, OnInit } from '@angular/core';
import { UserRequestService } from "../../services/user-request.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user$ : User;

  constructor( private userRequestService : UserRequestService ) { }

  ngOnInit(){

    this.userRequestService.getUserInfo()
    this.user$ = this.userRequestService.user;

  }

}
