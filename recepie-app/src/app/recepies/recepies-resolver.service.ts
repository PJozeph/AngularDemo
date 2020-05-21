import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Recepie } from './recepie.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Injectable } from '@angular/core';
import { RecepieService } from './recepie.service';

@Injectable()
export class RecepieResolverService implements Resolve<Recepie[]> {

    constructor(private dataStorageResolver : DataStorageService, private recepieService : RecepieService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) {
        const recepies = this.recepieService.getRecepies();
        if (recepies.length === 0) {
            return this.dataStorageResolver.fetchData()
        }
        return recepies;
    }

}