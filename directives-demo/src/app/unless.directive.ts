import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // templateRef = what, viewContainerRef = where
  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
    console.log("Ééééééééééééééééééééééééé ")
   }

  // if property changes setUnless ivokes
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

}
