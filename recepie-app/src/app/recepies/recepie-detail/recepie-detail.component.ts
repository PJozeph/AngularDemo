import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  @Input() selectedRecepie: Recepie;

  ngOnInit(): void {
  }

  addToShoppongList(recepie) {
    this.shoppingListService.addAll(recepie.ingredients);
  }

}
