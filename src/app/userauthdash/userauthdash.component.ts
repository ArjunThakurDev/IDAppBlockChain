import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-userauthdash',
  templateUrl: './userauthdash.component.html',
  styleUrls: ['./userauthdash.component.css']
})
export class UserauthdashComponent implements OnInit {
  messages = [];
  connection;
  message;

  constructor(private chatService: UserdataService) { }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    });
  }

}
