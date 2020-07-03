import { Component, OnInit, OnDestroy } from "@angular/core";

import { interval, Subscription, Observable } from "rxjs";
import { map, filter } from "rxjs/operators";


@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error("Count greater than 5"));
        }
        count++;
      }, 1000);
    });

    this.firstSubscription = customObservable
      .pipe(
        filter(num=>{
          return num>0;
        })
        // map((data: number) => {
        //   return "Round : " + (data + 1);
        // })
        
      )
      .subscribe(
        count => {
          console.log(count);
        },
        error => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log("completed");
        }
      );
  }

  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
  }
}
