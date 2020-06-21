import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit{
    
    constructor(private elementRef: ElementRef){}
    

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
    
}