import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHightLight]'
})
export class BasicHightlightDirective implements OnInit {

    constructor(private elementRef: ElementRef) { }

    // With this method we  might get error in case of service workers
    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }

}