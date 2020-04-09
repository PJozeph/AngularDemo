import { Ingredient } from "./../shared/ingredient.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
  // providers: [ShoppingListService]
})
export class ShoppingListComponent implements OnInit , OnDestroy{

  ingredients: Ingredient[] = [];
  private idSubscription : Subscription ;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnDestroy(): void {
    this.idSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.idSubscription = this.shoppingListService.onAddIngridient.subscribe((ingredient: Ingredient) => {  this.ingredients.push(ingredient)})
  }

  addIngridient(ingridient: Ingredient) {
    this.ingredients.push(ingridient);
  }
}
