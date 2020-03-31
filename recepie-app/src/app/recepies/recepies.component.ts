import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent implements OnInit {

  selectedRecepie: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.recepieService.onSelectRecepie.subscribe(
      (recipie: Recepie) => {
        this.selectedRecepie = recipie;
      });
  }

}
