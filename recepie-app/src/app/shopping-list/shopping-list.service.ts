import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'

@Injectable()
export class ShoppingListService {

    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 2),
        new Ingredient("Tomato", 5)
    ];

    onAddIngridient = new EventEmitter<Ingredient>();

    addIngridient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    getIngredients() {
        // slich method create a copy of ingredients
        return this.ingredients;
    }

}