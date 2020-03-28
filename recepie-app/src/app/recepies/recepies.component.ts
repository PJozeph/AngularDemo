import { Component, OnInit } from '@angular/core';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css']
})
export class RecepiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selected: Recepie;

  onSelectRecipie(selectedRecipie) {
    this.selected = selectedRecipie;
    console.log(selectedRecipie);
  }

}
