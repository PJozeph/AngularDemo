import { Recepie } from "./../recepie.model";
import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-recepie-list",
  templateUrl: "./recepie-list.component.html",
  styleUrls: ["./recepie-list.component.css"]
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[];

  constructor(private recepiesService: RecepieService, private route : Router, private activeRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.recepies = this.recepiesService.getRecepies();
  }

  loadAddComponent() {
    this.route.navigate(['new'],{relativeTo : this.activeRoute})
  }

}