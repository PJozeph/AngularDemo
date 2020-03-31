import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {

    counter : number = 0;

    setUserStatus() {
        this.counter ++;
        console.log(this.counter)
    }

    getCounter () {
        return this.counter;
    }

}