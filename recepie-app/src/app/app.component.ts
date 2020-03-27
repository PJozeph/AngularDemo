import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  showListView: boolean;

  showView: string= "shopping-list";

  onViewChanged(viewData: { viewName: string }) {
    this.showView = viewData.viewName;
  }
}
