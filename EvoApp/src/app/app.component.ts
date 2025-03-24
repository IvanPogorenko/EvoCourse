import {Component, OnInit} from '@angular/core';
import {IDog} from "./interfaces/dog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  public dogs : IDog[] = []
  public date = new Date()

  ngOnInit() {
    let dog: IDog = {
      color: 'black'
    }
    for(let i = 0; i<3; i++){
      dog = {
        ...dog,
        name: `dogName ${i}`
      }
      this.dogs.push(dog)
    }
  }

}
