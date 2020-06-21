import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //encapsulation: ViewEncapsulation.None 
})
export class AppComponent {

  serverElements = [{type:'server', name:'TestServer', content:'Test Server Content'}] ;
  intervalValue = 0;
  evenNumbers: number[]= [];
  oddNumbers: number[] = [];

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name: blueprintData.serverName,
      content:blueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name="changed!";
  }

  onStartingGame(intervalData:number){
    console.log(intervalData)
    if(intervalData%2===0){
      this.evenNumbers.push(intervalData);
    }else{
      this.oddNumbers.push(intervalData);
    }
  }
}
