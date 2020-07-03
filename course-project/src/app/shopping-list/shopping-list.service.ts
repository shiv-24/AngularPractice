import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';

import { Subject } from 'rxjs';

export class ShoppingListService{

    // ingredientChanged = new EventEmitter<Ingredient[]>();
    ingredientChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] =[
        new Ingredient('Potato',5),
        new Ingredient('Tomato', 10)
      ];
    
    getIngredient(index:number){
        return this.ingredients[index];
    }

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(addedIngredient: Ingredient){
        this.ingredients.push(addedIngredient);
        // this.ingredientChanged.emit(this.ingredients.slice());
        this.ingredientChanged.next(this.ingredients.slice());
    }

    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients);
        // this.ingredientChanged.emit(this.getIngredients());
        this.ingredientChanged.next(this.getIngredients());
    }

    updateIngredient(index:number, ingredient:Ingredient){
        this.ingredients[index] = ingredient;
        this.ingredientChanged.next(this.ingredients.slice());
    }

    deleteIngredient(index:number){
        this.ingredients.splice(index,1);
        this.ingredientChanged.next(this.ingredients.slice());
    }
}