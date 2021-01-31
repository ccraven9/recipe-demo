import { Ingredient } from './../../shared/ingredient.model';
import {  Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged: Subject<Ingredient[]> = new Subject<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Carrot", 6)
  ];

  constructor() { }

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient){
    console.log('added')
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients); //using spread operator to push each ingredient element individually
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
