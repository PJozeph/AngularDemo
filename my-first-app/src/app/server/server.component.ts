import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles : ['./server.component.css']
})
export class ServerComponent  {
  serverId: number = 10;
  serverStatus :  string = "offline";


  getServerStatus() {
    return this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getColor() {
    return this.serverStatus == "online" ? "green" : "red";
  }


}


