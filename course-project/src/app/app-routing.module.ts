import { NgModule } from "@angular/core";
import {
  Routes,
  RouterModule,
  PreloadingStrategy,
  PreloadAllModules
} from "@angular/router";

const appRoutes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "/recipes" },
  {
    path: "recipes",
    // loadChildren: './recipes/recipes.module#RecipesModule'
    // loadChildren: ()=>import('./recipes/')
    loadChildren: () =>
      import("./recipes/recipes.module").then(m => m.RecipesModule)
  },
  {
    path: "shopping-list",
    // loadChildren: './shopping-list/shopping-list.module#ShoppingListModule'
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        m => m.ShoppingListModule
      )
  },
  {
    path: "auth",
    // loadChildren: './auth/auth.module#AuthModule'
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
