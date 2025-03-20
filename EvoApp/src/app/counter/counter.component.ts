import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  private count = 0

  public changeCount(action: boolean){
    if (action){
      this.count++
    } else if (this.count > 0){
      this.count--
    }
  }

  public getCount(): number{
    return this.count;
  }

}
