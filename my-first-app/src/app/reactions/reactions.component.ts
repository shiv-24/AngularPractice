import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactions',
  templateUrl: './reactions.component.html',
  styleUrls: ['./reactions.component.css']
})
export class ReactionsComponent implements OnInit {

  constructor() { 
    // setTimeout(()=>{
    //   this.allowAddingReactions = true;
    // },2000)
  }

  ngOnInit(): void {
  }

  allowAddingReactions = false;
  reactionStatus = "No reaction";
  reactionName = 'Default Reaction';
  userName = '';

  onReactionAdded(){
    this.reactionStatus = "Yeeahh Reaction";
  } 

  
  onUpdateReactionName(event : Event){
    this.reactionName = (<HTMLInputElement>event.target).value;
  }

  // onUpdateReactionName(event : Event){
  //   this.reactionName = (<HTMLInputElement>event.target).value;
  // }
  ifButtonEnabled(){
    if(this.userName.length==0){
      return false;
    }else{
      return true;
    }
  }

  onUserNameAdded(){
    this.userName = ''
  } 

}
