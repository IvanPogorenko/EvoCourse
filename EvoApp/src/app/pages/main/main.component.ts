import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {IRecipe} from "../../interfaces/IRecipe";
import {Meta, Title} from "@angular/platform-browser";
import {IFeedBackMsg} from "../../interfaces/IFeedBackMsg";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy{

  constructor(
    private _recipeService: RecipesService,
    private _meta: Meta,
    private _title: Title
  ) {
  }

  public feedBack!: IFeedBackMsg

  public email = ""

  public isShowMore = false

  public sliderRecipes: IRecipe[] = []
  public bestRecipes: IRecipe[] = []
  public testRecipes: IRecipe[] = []

  ngOnInit() {
    this._title.setTitle('Foodie: Главная');
    this._meta.addTag({name: 'description', content: 'Сборник кулинарных рецептов, для всей семьи'})
    this._recipeService.getRecipes().subscribe({
      next: value => {
        this.sliderRecipes = value.slice(0, 3)
        this.bestRecipes = this.getRandomRecipes(value, 6)
        this.testRecipes = this.getRandomRecipes(value, 4)
      },
      error: err => {
        console.log(err)
      }
    })
  }

  ngOnDestroy() {
    this._meta.removeTag('name="description"')
  }

  public getRandomRecipes(recipes: IRecipe[], count: number): IRecipe[]{
    const copy = [...recipes]
    const result: IRecipe[] = []
    for(let i =  0; i < count; i++){
      const randomIndex = Math.floor(Math.random() * copy.length)
      result.push(copy[randomIndex])
      copy.splice(randomIndex, 1)
    }
    return result
  }

  public showMore(){
    this.isShowMore = true
  }

  public onSubmit(){
    this.feedBack = {
      title: 'Подписка оформлена',
        body: 'Вы успешно формили подписку',
      isSuccess: true
    }
    this.email = ""
  }

}
