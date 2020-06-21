import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    constructor(private shoppingListService: ShoppingListService) { }

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Testing Recipe 1',
            'Test 1',
            'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/roastlegoflambwithga_90252_16x9.jpg',
            [new Ingredient('meat', 1), new Ingredient('frenchFries', 12)]),
        new Recipe(
            'Testing Recipe 2',
            'Test 2',
            'https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/roastlegoflambwithga_90252_16x9.jpg',
            [new Ingredient('Veges', 1), new Ingredient('frenchFries', 12)])
    ];

    getRecipes() {
        //This returns a new array with the exact same values as recipes so that no one can have the access of the original array.
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}