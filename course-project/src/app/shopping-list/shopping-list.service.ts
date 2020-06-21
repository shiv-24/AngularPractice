import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService{

    ingredientChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] =[
        new Ingredient('Potato',5),
        new Ingredient('Tomato', 10)
      ];
    
    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(addedIngredient: Ingredient){
        this.ingredients.push(addedIngredient);
        this.ingredientChanged.emit(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.getIngredients());
    }
}