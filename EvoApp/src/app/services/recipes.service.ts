import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IRecipe, toRecipe} from "../interfaces/IRecipe";
import {IRecipeFull, toIRecipeFull} from "../interfaces/IRecipeFull";

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getRecipes(): Observable<IRecipe[]> {
    return this._httpClient.get<any>('/posts').pipe(
      map(value => value.map(toRecipe))
    )
  }

  public getRecipe(id: string): Observable<IRecipeFull>{
    return this._httpClient.get<any>(`/posts/${id}`).pipe(
      map(value => toIRecipeFull(value))
    )
  }

  public addComment(id: string, comment: string){
    const headers = new HttpHeaders().set("requiresAuth", "true")
    return this._httpClient.post(`/posts/${id}/add-comment`, {text: comment}, {headers})
  }
}
