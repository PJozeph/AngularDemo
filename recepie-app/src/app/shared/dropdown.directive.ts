import { Directive, HostListener, ElementRef, Renderer2, HostBinding } from '@angular/core';

@Directive({
  selector: '[openDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen = false;

  constructor(private elementReferency: ElementRef, private render: Renderer2) { }

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen
  }


}
