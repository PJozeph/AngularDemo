import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus : string  = "No server was created!";
  serverName: string ="ForTest";
  userName : string = "";
  isUserNameFieldEmpty = true;
  serverCreated = false;
  servers = ['TestServer','TestServer 2'];

  constructor() {

    setTimeout(()=> {
      this.allowNewServer = true;
    },2000);

   }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = "server is created the name of the server is " + this.serverName;
    this.serverCreated = true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  updateUserName(event) {
    this.userName = event.target.value;
    let name =event.target.value;
    if(name == "") {
      this.isUserNameFieldEmpty = true;
    } else {
      this.isUserNameFieldEmpty = false;
    }
   }

}
