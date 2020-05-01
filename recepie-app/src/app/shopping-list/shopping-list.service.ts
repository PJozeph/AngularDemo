import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { Subject } from 'rxjs';

@Injectable()
export class ShoppingListService {

    startEditing = new Subject<number>();
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apple", 2),
        new Ingredient("Tomato", 5)
    ];

    onAddIngridient = new Subject<Ingredient>();

    addAll(ingredient: Ingredient[]) {
        this.ingredients.push(...ingredient);
    }

    addIngridient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredients() {
        // slich method create a copy of ingredients
        this.ingredientsChanged.subscribe(
            (ingredients : Ingredient[]) => {
                this.ingredients = ingredients;
            }
            );
        return this.ingredients.slice();
    }

    getIngeredient(index: number) {
        return this.ingredients[index]
    }

    updateIngredient(index : number , ingredient : Ingredient) {
        this.ingredients[index] = ingredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteElement(index : number) {
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}