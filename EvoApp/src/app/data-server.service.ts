import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getPosts(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts")
  }

  public getPost(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/post ")
  }

  public getPostById(){
    return this.httpClient.get(" https://jsonplaceholder.typicode.com/posts/1")
  }

  public getCommentsById(postId: number){
    const params = new HttpParams().set('postId', postId)
    return this.httpClient.get("https://jsonplaceholder.typicode.com/comments", {params: params})
  }

  public getPostWithHeader(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts", {headers: {'X-Test': '1'}, responseType: 'text'})
  }

  public postNewPost(){
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts", {})
  }

  public deletePost(){
    return this.httpClient.delete(" https://jsonplaceholder.typicode.com/posts/1")
  }
}
