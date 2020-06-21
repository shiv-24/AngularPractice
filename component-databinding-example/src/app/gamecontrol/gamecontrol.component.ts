import { Component, OnInit, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {

  interval;
  lastNumber = 0;
  @Output() startingGame = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.interval = setInterval(()=>{
      this.startingGame.emit(this.lastNumber+1)
      this.lastNumber++;
    },1000)
  }

  onStopGame() {
    clearInterval(this.interval);
  }

}
