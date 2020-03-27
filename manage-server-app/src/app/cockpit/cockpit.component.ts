import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  // newServerContent = '';

  @ViewChild('serverContent',{static:true}) serverContentInput : ElementRef;

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName, serverContent) {
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

   onAddBlueprint(serverName) {
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

}
