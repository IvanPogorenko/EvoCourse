import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {RecipeStateService} from "../../services/recipe-state.service";
import {IRecipe} from "../../interfaces/IRecipe";
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-recipe-card-catalog',
  templateUrl: './recipe-catalog.component.html',
  styleUrls: ['./recipe-catalog.component.scss']
})
export class RecipeCatalogComponent implements OnInit, OnDestroy{

  constructor(
    private _recipeService: RecipesService,
    private _meta: Meta,
    private _title: Title
  ) {
  }

  public recipes: IRecipe[] = []

  ngOnInit() {
    this._title.setTitle('Foodie: Каталог рецептов')
    this._meta.addTag({name: 'description', content: 'Все самые лучшие рецепты собраны здесь'})
    this._recipeService.getRecipes().subscribe({
      next: value => {
        this.recipes = value
      }
    })
  }

  ngOnDestroy() {
    this._meta.removeTag('name="description"')
  }

}
