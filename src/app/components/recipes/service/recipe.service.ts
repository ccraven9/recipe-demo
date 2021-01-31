import { ShoppingListService } from './../../shopping-list/service/shopping-list.service';
import { Recipe } from './../recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  
  private recipes: Recipe[] = [
    new Recipe('Test Recipe', "this is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3bHjX-0guRAX6YIiiMCDwwUl_aGXcYgGCA&usqp=CAU", [new Ingredient('Flour', 1), new Ingredient('Sugar', 1)]),
    new Recipe('Another Test Recipe', "this is also a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3bHjX-0guRAX6YIiiMCDwwUl_aGXcYgGCA&usqp=CAU", [new Ingredient('Flour', 1), new Ingredient('Butter', 1)])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipe(index: number){
    return this.recipes[index];
  }

  getRecipes() {
    return this.recipes.slice(); //using slice returns a copy of the array, and not the direct reference.
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
