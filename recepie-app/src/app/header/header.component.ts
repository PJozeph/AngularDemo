import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { DataStorageService } from '../shared/data-storage.service';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators'
import { Recepie } from '../recepies/recepie.model';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorageService: DataStorageService) { }

  ngOnInit(): void { }

  onSaveData() {
    this.dataStorageService.saveRecepies();
  }

  onFetchData() {
    this.dataStorageService.fetchData().subscribe();
  }

}
