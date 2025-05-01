import {Component, OnDestroy, OnInit} from '@angular/core';
import {RecipesService} from "../../services/recipes.service";
import {IRecipe} from "../../interfaces/IRecipe";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {IRecipeFull} from "../../interfaces/IRecipeFull";
import {Meta, Title} from "@angular/platform-browser";
import {RoutingService} from "../../routing.service";
import {RecipeStateService} from "../../services/recipe-state.service";
import {IModalMsg} from "../../interfaces/IModalMsg";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit, OnDestroy{

  constructor(
    private _recipeService: RecipesService,
    private _routingService: RoutingService,
    private _recipeStateService: RecipeStateService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _title: Title,
    private _meta: Meta
  ) {
  }

  public recipe!: IRecipeFull
  public recipes: IRecipe[] = []
  public otherRecipes: IRecipe[] = []

  public checkedIngredients: boolean[] = []
  public checkedSteps: boolean[] = []

  private routeParams$ !: Subscription

  public comment = ""

  public modalMsg: IModalMsg = {
    title: 'Поделиться этим рецептом?',
    body: 'Вы хотите поделиться этим рецептом со всеми?',
    btnText: 'Поделиться',
    isDanger: false
  }

  ngOnInit() {
    this.routeParams$ = this._route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this._recipeService.getRecipe(id).subscribe({
          next: value => {
            this.recipe = value
            this._title.setTitle(value.title)
            this._meta.addTags([
              {name: 'description', content: value.body},
              {name: 'image', content: value.image}
            ])
            this.checkedIngredients = new Array(value.ingredients.length).fill(false)
            this.checkedSteps = new Array(value.cookingSteps.length).fill(false)
          },
          error: err => {
            if (err.status === 400){
              this._router.navigateByUrl('**')
            }
          }
        })
      } else {
        this._router.navigateByUrl('**')
      }
    });
    this._recipeService.getRecipes().subscribe({
      next: value => {
        this.recipes = this.getRandomRecipes(value, 3)
        this.otherRecipes = this.getRandomRecipes(value, 4)
      }
    })
  }

  public getRandomRecipes(value: IRecipe[], count: number){
    const copy = value
    const result: IRecipe[] = []
    for(let i =  0; i < count; i++){
      const randomIndex = Math.floor(Math.random() * copy.length)
      result.push(copy[randomIndex])
      copy.splice(randomIndex, 1)
    }
    return result
  }

  public goToRecipe(id: string){
    this._routingService.toRecipe(id)
  }

  public sendComment(){
    this._recipeService.addComment(this.recipe.id, this.comment).subscribe({
      next: value => {
        this._recipeService.getRecipe(this.recipe.id).subscribe({
          next: updatedRecipe => {
            this.recipe = updatedRecipe
            this.comment = ""
          }
        })
      }
    })
  }

  public checkFavs(){
    const favorites = this._recipeStateService.getState().recipes
    return favorites.some(recipe => recipe.id === this.recipe.id)
  }

  public addToFavs(){
    const recipe = this.recipes.find(recipe => recipe.id === this.recipe.id)
    if (recipe){
      this._recipeStateService.updateFav(recipe)
    }
  }

  public toggleIngredient(index: number) {
    this.checkedIngredients[index] = !this.checkedIngredients[index]
  }

  public toggleStep(index: number) {
    this.checkedSteps[index] = !this.checkedSteps[index]
  }

  public printPage(){
    window.print()
  }

  ngOnDestroy() {
    this._meta.removeTag('name="description"')
    this._meta.removeTag('name="image"')
    this.routeParams$.unsubscribe()
  }

}
