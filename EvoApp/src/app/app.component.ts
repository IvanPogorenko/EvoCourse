import { Component } from '@angular/core';
import {Notify} from "notiflix";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public date = new Date();
  public inputDate: string = '';

  public checkDate(){
    const selectedDate = new Date(this.inputDate)
    if (this.date > selectedDate){
      Notify.failure('The entered date is less than the current date')
    } else {
      Notify.success('The date is correct')
    }
  }
}
