import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import {My_User_Id} from '../constants';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.sass']
})
export class MessageListComponent implements OnInit {

  @Input() posts :any  = []; 

  currentStyles : Record<string, string> = {};

  myId : number = My_User_Id;

  @Output() editMessage = new EventEmitter<number>();
  @Output() deleteMessage = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  editPost(value: number) {
    this.editMessage.emit(value);
  }

  deletePost(value: number){
    this.deleteMessage.emit(value);
  }

}
