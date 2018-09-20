import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()

export class RecipeService {
    recipeSelected= new EventEmitter<Recipe>();

    private recipes: Recipe[]= [
        new Recipe(
            'A test recipe', 
            'This is just a new recipe', 
            'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
            [
                new Ingredient('Meat', 7),
                new Ingredient('Latuse', 6)
            ]),
        new Recipe(
            'Another test recipe', 
            'This is just an another new recipe', 'https://cdn.pixabay.com/photo/2015/12/20/17/11/fish-1101436_960_720.jpg',
            [
                new Ingredient('Bun', 1),
                new Ingredient('Meat', 7)
            ])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
          return this.recipes.slice();
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
      }
}