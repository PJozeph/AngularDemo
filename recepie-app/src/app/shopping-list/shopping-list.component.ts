import { Ingredient } from "./../shared/ingredient.model";
import { Component, OnInit } from "@angular/core";
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [];

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.shoppingListService.onAddIngridient.subscribe((ingredient: Ingredient) => {  this.ingredients.push(ingredient)})
  }

  addIngridient(ingridient: Ingredient) {
    this.ingredients.push(ingridient);
  }
}
