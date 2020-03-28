import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  constructor() { }


  @Input() selectedRecepie: Recepie;

  ngOnInit(): void {
  }

}
