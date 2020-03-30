import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHightLight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = "transparent";
  @Input() hightlightColor: string = "blue";
  // with 'style.backgroundColor' we accessing the DOM property
  @HostBinding('style.backgroundColor') backgoundColor: string = "transparent";

  constructor(private elementRef: ElementRef, private render2: Renderer2) {
  }

  ngOnInit(): void {
    // this.render2.setStyle(this.elementRef.nativeElement,'background-color','blue');
    this.backgoundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    // this.render2.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgoundColor = this.hightlightColor;
  }


  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.render2.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgoundColor = this.defaultColor;
  }

}
