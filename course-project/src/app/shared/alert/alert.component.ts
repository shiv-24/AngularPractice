import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from 'protractor';

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit {
  @Input() message: string;

  @Output() close: EventEmitter<void> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClose() {
    this.close.emit();
  }
}
