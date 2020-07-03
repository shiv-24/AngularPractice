import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.model";
import { ShoppingListService } from "src/app/shopping-list/shopping-list.service";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Params, Router } from "@angular/router";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  selectedRecipeDetail: Recipe = {} as Recipe;
  selectedId: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.selectedId = +params['id'];
        this.selectedRecipeDetail = this.recipeService.getRecipe(this.selectedId);
      }
    )
  }

  addToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.selectedRecipeDetail.ingredients
    );
    alert("Added to the shopping list");
  }

  onDelete(){
    this.recipeService.deleteRecipe(this.selectedId);
    this.router.navigate(['/recipes']);
  }
}
