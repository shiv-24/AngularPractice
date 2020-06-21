import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHightlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor : string;
  @HostBinding('style.color') textColor : string = 'black';

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
    this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
    this.textColor = 'black';
  }
}
