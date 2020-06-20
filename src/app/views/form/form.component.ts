import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Output() addUsername = new EventEmitter()
  username = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitName(username : string) {
    console.log(username);
    this.addUsername.emit(this.username = username)
  }

  

}
