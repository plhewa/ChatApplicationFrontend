import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Message } from '../models/message.model';
import {My_User_Id} from '../constants';

@Component({
  selector: 'app-message-input-box',
  templateUrl: './message-input-box.component.html',
  styleUrls: ['./message-input-box.component.sass']
})
export class MessageInputBoxComponent implements OnInit {

  constructor() { }

  appearInputBox: boolean = false; //boolean variable to display input box

  @Input() messageData = new Message ();
  @Input() isInputBoxVisible = false;
  @Output() addMessage = new EventEmitter<Message>();
  @Output() showInputBox = new EventEmitter();

  ngOnInit(): void {
  }

  onSubmit() : void{

    this.messageData.userId = My_User_Id;
    this.messageData.dateTime = new Date();

    this.addMessage.emit(this.messageData);

  }

  setAppearInputBoxToTrue() {
    this.showInputBox.emit();
  }

}
