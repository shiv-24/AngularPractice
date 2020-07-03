import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";
import { Store } from "@ngrx/store";

import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer'
import * as ShoppingListActions from "../shopping-list/store/shopping-list.actions"

@Injectable()
export class RecipeService {
  constructor(
    private shoppingListService: ShoppingListService,
    private store: Store<fromShoppingList.AppState>
  ) {}

  // // recipeSelected = new EventEmitter<Recipe>();
  // recipeSelected = new Subject<Recipe>();

  recipeChanged = new Subject<Recipe[]>();

  // private recipes: Recipe[] = [
  //     new Recipe(
  //         'Testing Recipe 1',
  //         'Test 1',
  //         'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/roastlegoflambwithga_90252_16x9.jpg',
  //         [new Ingredient('meat', 1), new Ingredient('frenchFries', 12)]),
  //     new Recipe(
  //         'Testing Recipe 2',
  //         'Test 2',
  //         'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/roastlegoflambwithga_90252_16x9.jpg',
  //         [new Ingredient('Veges', 1), new Ingredient('frenchFries', 12)])
  // ];

  private recipes: Recipe[] = [];

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipeChanged.next(this.recipes.slice());
  }
  getRecipes() {
    //This returns a new array with the exact same values as recipes so that no one can have the access of the original array.
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    //This returns a new array with the exact same values as recipes so that no one can have the access of the original array.
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    // this.shoppingListService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  setRecipe(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipeChanged.next(this.recipes.slice());
  }
}
