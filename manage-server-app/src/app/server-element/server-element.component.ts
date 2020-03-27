import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

// ViewEncapsulation will diable css encapsulation
// Emulated wil be emulated weher browser is supported

export class ServerElementComponent implements OnInit {

  // serverElement is the alias, element will no longer work
  @Input('serverElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
