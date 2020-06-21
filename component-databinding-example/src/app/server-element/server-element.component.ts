import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name:string;

  constructor() { 
    console.log("constructor called");
  }
  ngAfterContentChecked(): void {
    console.log("After Content Checked called");
  }
  ngAfterContentInit(): void {
    console.log("After Content Init called");
  }
  ngDoCheck(): void {
    console.log("Do check code");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error("Method not implemented.");
    console.log("in on changes");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ng onit called");
  }

}
