import { Injectable } from '@angular/core';
import { Recepie } from './recepie.model'
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable()
export class RecepieService {
    recepieChanged = new Subject<Recepie[]>();
    onSelectRecepie = new Subject<any>();

    private recepies: Recepie[] = [ ];

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

    setRecepies(recepies: Recepie[]) {
        this.recepies = recepies;
        this.recepieChanged.next(this.recepies.slice());
    }

    addRecepie(recepie: Recepie) {
        let recepieWithMaxId = Math.max.apply(Math, this.recepies.map(function (o) { return o.id }))
        recepieWithMaxId++;
        recepie.id = recepieWithMaxId;
        this.recepies.push(recepie);
        this.recepieChanged.next(this.recepies.slice());
    }

    updateRecepie(index: number, recepie: Recepie) {
        recepie.id = index;
        this.recepies[index] = recepie;
        this.recepieChanged.next(this.recepies.slice());
    }

    deleteRecepie(index: number) {
        this.recepies.splice(index, 1);
        this.recepieChanged.next(this.recepies.slice())
    }

}