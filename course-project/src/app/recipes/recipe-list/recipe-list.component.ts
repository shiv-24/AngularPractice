import { Component, OnInit, OnDestroy } from "@angular/core";
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  changedRecipeSub: Subscription;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log("on int of recipe list");
    this.recipes = this.recipeService.getRecipes();
    console.log("recipes are ", this.recipes);
    this.changedRecipeSub = this.recipeService.recipeChanged.subscribe(
      newRecipes => {
        this.recipes = newRecipes;
      }
    );
  }

  ngOnDestroy(): void {
    this.changedRecipeSub.unsubscribe();
  }

  onNewRecipeClick(): void {
    this.router.navigate(["new"], { relativeTo: this.route });
    // this.router.navigate(["../","new"], { relativeTo: this.route }); this will go one level up in the route and then add new to the current route
  }
}
