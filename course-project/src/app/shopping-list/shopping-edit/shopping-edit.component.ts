import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  addItem(nameInput:HTMLInputElement, amountInput:HTMLInputElement){
    const ingredient = new Ingredient(nameInput.value, +amountInput.value)
    this.shoppingListService.addIngredient(ingredient);
  }
}
