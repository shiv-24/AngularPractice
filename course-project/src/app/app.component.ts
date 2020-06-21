import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  indexToShow:number = 0;

  onSelectingHeader(selectedIndex:number){
    console.log(selectedIndex);
    this.indexToShow = selectedIndex;
  }

}
