import { Injectable } from '@angular/core';
import { Recepie } from './recepie.model'
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecepieService {
    recepieChanged = new Subject<Recepie[]>();

    private recepies: Recepie[] = [
        new Recepie(
            0,
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
            1,
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
        return recepie;
    }

    getRecepies() {
        return this.recepies.slice();
    }

    addRecepie(recepie : Recepie) {
        let recepieWithMaxId = Math.max.apply(Math, this.recepies.map(function(o) { return o.id }))
        recepieWithMaxId++;
        recepie.id = recepieWithMaxId; 
        this.recepies.push(recepie);
        this.recepieChanged.next(this.recepies.slice());
    }
    
    updateRecepie(index : number , recepie : Recepie) {
        recepie.id = index;
        this.recepies[index] = recepie;
        this.recepieChanged.next(this.recepies.slice());
    }

    deleteRecepie(index : number){
        this.recepies.splice(index,1);
        this.recepieChanged.next(this.recepies.slice())
    }

}