import { Component } from '@angular/core';
import {interval, map, Subscription} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public seqActive = false;
  public randActive = false;

  public seqNumbers: number[] = []
  public randNumbers: string[] = []

  private seqSub$!: Subscription;
  private randSub$!: Subscription;

  public onStart(){
    this.seqActive = true
    this.randActive = true
    const intervalStream = interval(2000);
    this.seqSub$ = intervalStream.subscribe(() => {
      this.seqNumbers.push(this.seqNumbers.length)
    })
    this.randSub$ = intervalStream.pipe(
      map(() => {
        const randomVal =  Math.floor(Math.random() * 10)
        return `Random Value: ${randomVal}`
      })
    ).subscribe((value) => this.randNumbers.push(value))
  }

  public onStopSeq(){
    this.seqActive = false
    this.seqSub$.unsubscribe()
  }

  public onStopRand(){
    this.randActive = false
    this.randSub$.unsubscribe()
  }
}
