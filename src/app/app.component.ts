import { Component, OnInit } from '@angular/core';
import { MessageServiceService } from './message-service.service';
import { Message } from './models/message.model';
import { HubConnection, HubConnectionBuilder } from '@aspnet/signalr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent implements OnInit{
  title = 'AssignmentFrontend';

  posts :any = []; //initializing 'posts' array

  messageData: Message = new Message(); //creation of a Message object

  isInputBoxVisible : boolean = false;

  private _hubConnection!: HubConnection;

  constructor(private messageService:MessageServiceService){  }
  
  ngOnInit(): void {
    // apply signalR to implment relatime environment in the chat application
    this._hubConnection = new HubConnectionBuilder().withUrl('https://localhost:5001/notify').build();
    this._hubConnection.start()
    .then(()=>
    console.log('connection start'))
    .catch(err=>{
      console.log('Error while establishing the connection')
    });
    this._hubConnection.on('BroadcastMessage', (message)=>{
      this.getMessagaes();
    })
    this.getMessagaes();
  }

  //get all the messages 
  getMessagaes(){
    this.messageService.getMessages('https://localhost:5001/api/Message').subscribe(
      (repsonse) => {
        this.posts = repsonse;
      }
    );
  }

  // submit message
  onSubmit(event : Message) {
    if (event.id == 0) {
      this.insertMessage(event);
    } else {
      this.updateMessage(event);
    }
  }

// insert a new message
 insertMessage(newMessage: Message) {
    this.messageService.postMessage('https://localhost:5001/api/Message',newMessage).subscribe(data =>{
      console.log(data);
      this.resetData();
    });
  }

  //update an existing message
  updateMessage(message : Message){
    this.messageService.updateMessage('https://localhost:5001/api/Message/'+message.id , message).subscribe(data =>{
      console.log(data);
      this.resetData();
    });
  }

  //delete a message
  deleteMessageById(id : number) {
    this.messageService.deleteMessage('https://localhost:5001/api/Message/'+id).subscribe(data =>{
      console.log(data);
      //this.posts.filter((post) => post.id != id);
      this.resetData();
    });
  }

//fetch a message of logged in user
fetchMessageById (messageId : number)
{
    this.showInputBox();
    this.getMessageById(messageId);
}

//get message by id
 getMessageById(id : number){
    this.messageService.getMessageById('https://localhost:5001/api/Message/'+id).subscribe(
    (repsonse) => {
      this.messageData = repsonse;
    }
  );
  }

  //reset state of the messageData Object
  resetData(){
    this.messageData.id = 0;
    this.messageData.dateTime = new Date();
    this.messageData.message = '';
    this.messageData.userId = 0 ;
  }

  showInputBox(){
    this.isInputBoxVisible = true;
  }









}
