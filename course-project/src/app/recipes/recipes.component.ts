import { Component, OnInit, Output } from '@angular/core';

import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipeItem: Recipe;
  // constructor(private recipeService: RecipeService) { }
  constructor() { }

  ngOnInit(): void {
    // this.recipeService.recipeSelected.subscribe(
    //   (recipe: Recipe)=>{
    //     this.selectedRecipeItem = recipe;
    //   }
    //   )
  }

}
