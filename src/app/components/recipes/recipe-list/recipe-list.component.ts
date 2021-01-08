import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test Recipe', "this is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3bHjX-0guRAX6YIiiMCDwwUl_aGXcYgGCA&usqp=CAU"),
    new Recipe('Test Recipe', "this is a test", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs3bHjX-0guRAX6YIiiMCDwwUl_aGXcYgGCA&usqp=CAU")
  ];

  constructor() { }

  ngOnInit() {
  }

}
