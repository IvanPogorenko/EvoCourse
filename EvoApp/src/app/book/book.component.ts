import { Component } from '@angular/core';
import {BooksService} from "../books.service";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  constructor(
    public _booksService: BooksService
  ) {
  }

  protected readonly Object = Object;
}
