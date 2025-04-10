import {Component, OnInit} from '@angular/core';
import {IBook} from "./interfaces/IBook";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  public books: IBook[] = [
    {
      id: 1,
      title: "Преступление и наказание",
      author: "Достоевский"
    }
  ]

  public addedBook: IBook = {
    id: 0,
    title: "",
    author: ""
  }

  public onSubmit(){
    const lastBook = this.books.at(-1)
    const id = lastBook ? lastBook.id + 1 : 1
    this.books.push({
      id: id,
      title: this.addedBook.title,
      author: this.addedBook.author
    })
  }

}
