import { Component, OnInit } from '@angular/core';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

}
