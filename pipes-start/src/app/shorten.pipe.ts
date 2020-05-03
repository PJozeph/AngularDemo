import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'shorten'
})
export class Shorten implements PipeTransform {
    transform(value: any, limit : number ) {
        if(value.length > limit) {
            return  value.substr(0,limit) + "...";
        }
        return value;
    }
}