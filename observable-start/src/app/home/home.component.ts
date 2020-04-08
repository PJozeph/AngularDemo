import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  private firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    // this.firstSubscription =  interval(1000).subscribe(count => {
    //   console.log(count);
    // });

    const customIntervalObject = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        if (count === 2) {
          observer.complete();
        }

        observer.next(count);
        if (count > 3 ) {
          observer.error( new Error(' Counter is greather than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstSubscription = customIntervalObject.pipe( map( (data : number) => { return 'Round ' + (data + 1) } ) ).subscribe(count => {
      console.log(count);
    }, error => {
        alert(error.message);
    }, ()=> {
      console.log(' subscribe is complited');
    } );
  }

  ngOnDestroy(): void {
    this.firstSubscription.unsubscribe();
  }

}
