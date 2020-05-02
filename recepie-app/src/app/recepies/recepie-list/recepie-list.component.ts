import { Recepie } from "./../recepie.model";
import { Component, OnInit, EventEmitter, Output, OnDestroy } from "@angular/core";
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-recepie-list",
  templateUrl: "./recepie-list.component.html",
  styleUrls: ["./recepie-list.component.css"]
})
export class RecepieListComponent implements OnInit, OnDestroy {
  recepies: Recepie[];
  subscription: Subscription;

  constructor(private recepiesService: RecepieService, private route: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.recepies = this.recepiesService.getRecepies();
    this.subscription = this.subscription = this.recepiesService.recepieChanged.subscribe(
      (recepies: Recepie[]) => {
        this.recepies = recepies;
      }
    );
  }

  loadAddComponent() {
    this.route.navigate(['new'], { relativeTo: this.activeRoute })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}