import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test!', 'https://www.incimages.com/uploaded_files/image/970x450/getty_92020133_20001527181884336163_327730.jpg'),
    new Recipe('Another Test Recipe', 'This is simply a test!', 'https://www.incimages.com/uploaded_files/image/970x450/getty_92020133_20001527181884336163_327730.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
