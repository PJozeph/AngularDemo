import { Recepie } from "./../recepie.model";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { RecepieService } from '../recepie.service';

@Component({
  selector: "app-recepie-list",
  templateUrl: "./recepie-list.component.html",
  styleUrls: ["./recepie-list.component.css"]
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[];

  constructor(private recepiesService: RecepieService) { }

  ngOnInit(): void {
    this.recepies = this.recepiesService.getRecepies();
  }

}