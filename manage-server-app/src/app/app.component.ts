import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type:'server',name:'Name test',content:'This is just a test'}];

  onServerAdded(serverrData:{serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverrData.serverName,
      content: serverrData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverName
    });
  }
}
