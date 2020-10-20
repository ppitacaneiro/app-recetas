import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe';

@Injectable()
export class GetRecipesService {

  urlApi:string = 'https://api.spoonacular.com/recipes/';
  apiKey:string = 'bf866f9d55354a9aa2f3f1a4dbce7be4';
  numRecipes:number = 10;
  recipes:Recipe;

  constructor(private http:HttpClient) { }

  getRamdomRecipe():Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.urlApi + 'random?number=' + this.numRecipes + '&apiKey=' + this.apiKey);
  }

  getInfoFromRecipe(id:string):Observable<Recipe> {
    return this.http.get<Recipe>(this.urlApi + id + '/information?includeNutrition=false&apiKey=' + this.apiKey);
  }

  getSimilarRecipes(id:string):Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.urlApi + id + '/similar?number=' + this.numRecipes + '&apiKey=' + this.apiKey);
  }

}
