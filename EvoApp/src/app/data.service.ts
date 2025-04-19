import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IPost, toIPost} from "./interfaces/IPost";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public userRole: 'user' | 'admin' = 'user'

  public getPosts(): Observable<IPost[]>{
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts').pipe(
      map((data: any) => data.map(toIPost))
    )
  }

  public getPostDetails(id: number): Observable<IPost>{
    return this._httpClient.get(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
      map((data: any) => toIPost(data))
    )
  }
}
