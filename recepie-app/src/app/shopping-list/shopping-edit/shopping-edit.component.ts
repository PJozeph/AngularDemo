import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  
  }

  addIngredient(name, amount) {
    this.shoppingListService.onAddIngridient.next(new Ingredient(name.value, amount.value));
  }

}
