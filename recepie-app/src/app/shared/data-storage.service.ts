import { HttpClient } from '@angular/common/http';
import { Recepie } from '../recepies/recepie.model';
import { Injectable } from '@angular/core';
import { RecepieService } from '../recepies/recepie.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth-service';

@Injectable()
export class DataStorageService {

    constructor(private httpClient: HttpClient, private recepieService: RecepieService, private authService: AuthService) { }

    saveRecepies() {
        const recepies = this.recepieService.getRecepies();
        this.httpClient.put(
            'https://recepie-app-backend.firebaseio.com/recepies.json',
            recepies
        ).subscribe(response => {
            console.log(response);
        });
    }
    // take(number) get the current element and automaticly unsubscribe  

    // 'https://recepie-app-backend.firebaseio.com/recepies.json'
    fetchData() {
        return this.httpClient
            .get<Recepie[]>(
                'https://recepie-app-backend.firebaseio.com/recepies.json'
            )
            .pipe(
                map(recepies => {
                    return recepies.map(recepie => {
                        return {
                            ...recepie,
                            ingredients: recepie.ingredients ? recepie.ingredients : []
                        };
                    });
                }),
                tap(recepies => {
                    this.recepieService.setRecepies(recepies);
                })
            )
    }
} 