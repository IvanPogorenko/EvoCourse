import {IAuthor, IRecipe, toAuthor, toRecipe} from "./IRecipe";

export interface IRecipeFull extends IRecipe{
  foodValue: IFoodValue,
  cookingSteps: ICookingStep[],
  ingredients: IIngredient[]
  comments: IComment[]
}

export interface IFoodValue{
  calories: number,
  fats: number,
  carbohydrates: number,
  proteins: number
}

export interface ICookingStep{
  title: string,
  description: string
}

export interface IIngredient{
  title: string,
  description: string
}

export interface IComment{
  id: string,
  postId: string,
  user: IAuthor,
  text: string,
  createdOn: string,
  updatedOn: string
}

export function toIFoodValue(data: any): IFoodValue{
  return {
    calories: data.calories,
    fats: data.fats,
    carbohydrates: data.carbohydrates,
    proteins: data.proteins
  }
}

export function toICookingStep(data: any): ICookingStep{
  return {
    title: data.title,
    description: data.description
  }
}

export function toIIngredient(data: any): IIngredient{
  return {
    title: data.title,
    description: data.description
  }
}

export function toIComment(data: any): IComment{
  return {
    id: data.id,
    postId: data.postId,
    user: toAuthor(data.user),
    text: data.text,
    createdOn: data.createdOn,
    updatedOn: data.updatedOn
  }
}

export function toIRecipeFull(data: any): IRecipeFull{
  return {
    id: data.id,
    body: data.body,
    title: data.title,
    tags: data.tags,
    image: data.image,
    author: toAuthor(data.author),
    timeCooking: data.timeCooking,
    foodValue: toIFoodValue(data.foodValue),
    cookingSteps: data.cookingSteps.map(toICookingStep),
    ingredients: data.ingredients.map(toIIngredient),
    comments: data.comments.map(toIComment),
    createdOn: data.createdOn,
    updatedOn: data.updatedOn
  }
}
