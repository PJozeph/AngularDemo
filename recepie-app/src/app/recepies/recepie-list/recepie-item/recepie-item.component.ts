import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recepie } from "./../../recepie.model";
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  @Input() recepie: Recepie;
  @Input() recepieId;

  @Output() onSelectRecepie = new EventEmitter<any>();

  constructor(private recepieService : RecepieService) { }

  ngOnInit(): void {
  }

  onSelect(selectedRecepie) {
    this.recepieService.onSelectRecepie.emit(selectedRecepie);
  }

}
