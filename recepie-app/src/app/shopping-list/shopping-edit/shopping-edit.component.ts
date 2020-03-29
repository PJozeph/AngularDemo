import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor() { }

  @Output() onAddIngridient = new EventEmitter<any>();

  ngOnInit(): void {
  }

  addIngredient(name, amount) {
    this.onAddIngridient.emit(new Ingredient(name.value,amount.value));
  }

}
