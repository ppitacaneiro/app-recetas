import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetRecipesService } from '../services/getrecipes.service';
import { Recipe } from '../models/recipe';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {

  recipe:Recipe;
  similarRecipes:Recipe[];

  constructor(private route:ActivatedRoute,private getRecipeService:GetRecipesService) { }

  ngOnInit() {
    let id:string = this.route.snapshot.paramMap.get('id');
    this.getRecipeService.getInfoFromRecipe(id).subscribe(
      (data) => {
        this.recipe = data;
        this.getRecipeService.getSimilarRecipes(id).subscribe(
          (data) => {
            this.similarRecipes = data;
            console.log(this.similarRecipes);
          }
        );
      }
    );
  }
}
