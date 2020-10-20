import { Component, OnInit } from '@angular/core';
import { GetRecipesService } from '../services/getrecipes.service';
import { Recipe } from '../models/recipe';
import { HttpErrorResponse } from '@angular/common/http';
import { e } from '@angular/core/src/render3';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes:Recipe[];
  loading:boolean;

  constructor(private getRandom:GetRecipesService) { }

  ngOnInit() {
    this.getRandomRecipes();
  }

  getRandomRecipes () {
    this.loading = true;
    this.getRandom.getRamdomRecipe().subscribe(
      (data) => {
        console.log(data);
        this.recipes = data['recipes'];
        this.loading = false;
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }
}
