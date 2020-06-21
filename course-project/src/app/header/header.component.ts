import { Component, OnInit, Output,EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selectedComponentIndex = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectedItem(itemSelected:number){
    this.selectedComponentIndex.emit(itemSelected);
  }
}
