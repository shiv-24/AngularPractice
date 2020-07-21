import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { RecipeService } from "../recipe.service";
import { Recipe } from '../recipe.model';

@Component({
  selector: "app-recipe-edit",
  templateUrl: "./recipe-edit.component.html",
  styleUrls: ["./recipe-edit.component.css"]
})
export class RecipeEditComponent implements OnInit {
  paramId: number;
  editMode: boolean = false;
  recipeForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.paramId = +param["id"];
      this.editMode = param["id"] != null;
      this.initForm()
    });
  }

  private initForm() {
    let recipeName = "";
    let imagePath = "";
    let recipeDesciption = "";
    let recipeIngredents: FormArray = new FormArray([]);


    if (this.editMode) {
      const recipe = this.recipeService.getRecipe(this.paramId);
      recipeName = recipe.name;
      imagePath = recipe.imagePath;
      recipeDesciption = recipe.description;
      if(recipe['ingredients']){
        for(let ingredient of recipe.ingredients){
          recipeIngredents.push(
            new FormGroup({
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)])
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(recipeDesciption,Validators.required),
      'ingredients': recipeIngredents
    });
  }

  get controls() { // a getter!
    return (<FormArray>this.recipeForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      'name': new FormControl(null,Validators.required),
      'amount': new FormControl(null,[Validators.required, Validators.pattern(/^[0-9]+[0-9]*$/)])
    }))
  }


  onSubmit(){
    const newRecipe: Recipe = new Recipe(
      this.recipeForm.value['name'],
      this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients']
    );
    if(this.editMode){
      this.recipeService.updateRecipe(this.paramId,newRecipe)
    }else{
      this.recipeService.addRecipe(newRecipe)
    }
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngredients(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}