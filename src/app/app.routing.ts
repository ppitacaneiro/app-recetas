import {RouterModule,Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {SearchIngredientesComponent} from './search-ingredientes/search-ingredientes.component';
import {SearchNutrientsComponent} from './search-nutrients/search-nutrients.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';

const appRoutes = [
    {path:'home',component:HomeComponent,pathMath:'full'},
    {path:'search-ingredientes',component:SearchIngredientesComponent,pathMath:'full'},
    {path:'search-nutrients',component:SearchNutrientsComponent,pathMath:'full'},
    {path:'recipedetail/:id',component:RecipedetailComponent,pathMath:'full'}
];

export const routing = RouterModule.forRoot(appRoutes);