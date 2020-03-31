import { Injectable, EventEmitter } from '@angular/core';
import { Recepie } from './recepie.model'

@Injectable()
export class RecepieService {

    private recepies: Recepie[] = [
        new Recepie(
            "Test Name",
            "This is just for a test should be a description here",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
        ),
        new Recepie(
            "This is Name test 2",
            "Description test 2",
            "https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg"
        )
    ];

    onSelectRecepie = new EventEmitter<any>();

    getRecepies() {
        // slice(); will return the new instance of recpies
        return this.recepies;
    }

}