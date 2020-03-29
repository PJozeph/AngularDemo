import { Ingredient } from "./../shared/ingredient.model";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient("Apple", 2),
    new Ingredient("Tomato", 5)
  ];

  constructor() {}

  ngOnInit(): void {}

  addIngridient(ingridient) {
     this.ingredients.push(ingridient);
  }
}
