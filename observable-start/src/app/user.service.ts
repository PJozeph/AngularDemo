import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class UserService {


    activatedEmitter = new EventEmitter<boolean>();

}
