import { Recepie } from "./../recepie.model";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-recepie-list",
  templateUrl: "./recepie-list.component.html",
  styleUrls: ["./recepie-list.component.css"]
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie(
      "Test Name",
      "This is just for a test should be a description here",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    ),
    new Recepie(
      "This is Name test 2",
      "Description test 2",
      "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
    )
  ];

  constructor() { }

  ngOnInit(): void { }

  @Output() onSelectRecepie = new EventEmitter<any>();

  selected(selectedRecepie) {
    this.onSelectRecepie.emit(selectedRecepie)
  }

}