import { Directive, Input, TemplateRef, ViewRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  @Input() set appUnless(condition:boolean){
    if(!condition){
      this.viewContRef.createEmbeddedView(this.tempRef);
    }else{
      this.viewContRef.clear();
    }
  }
  constructor(private tempRef: TemplateRef<any>, private viewContRef: ViewContainerRef ) { }

}
