import { Injectable } from '@angular/core';
import { Recepie } from './recepie.model'
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecepieService {

    private recepies: Recepie[] = [
        new Recepie(
            1,
            "Hamburger",
            "This is just for a test should be a description here",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
            [
                new Ingredient('Meat', 2),
                new Ingredient('Salad', 1),
                new Ingredient('Tomato', 24)
            ]
        ),
        new Recepie(
            2,
            "Pizza",
            "Description test 2",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg",
            [
                new Ingredient('Liver', 2),
                new Ingredient('Paprika', 1),
                new Ingredient('Beans', 2)
            ]
        )
    ];

    onSelectRecepie = new Subject<any>();

    getRecepieById(id: number) {
        const recepie = this.recepies.find((recepie) => {
            return recepie.id === id;
            }
        );
        console.log(recepie)
        return recepie;
    }

    getRecepies() {
        // slice(); will return the new instance of recpies
        return this.recepies;
    }

}