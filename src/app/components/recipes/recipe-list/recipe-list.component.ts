import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test Recipe', "this is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3bHjX-0guRAX6YIiiMCDwwUl_aGXcYgGCA&usqp=CAU"),
    new Recipe('Another Test Recipe', "this is also a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3bHjX-0guRAX6YIiiMCDwwUl_aGXcYgGCA&usqp=CAU")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
