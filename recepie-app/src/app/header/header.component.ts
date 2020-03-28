import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

  @Output("switchView") view = new EventEmitter<{ viewName: string }>();

  constructor() { }

  ngOnInit(): void { }

  onShowList(viewName) {
    this.view.emit({
      viewName: viewName
    })
  }
}
