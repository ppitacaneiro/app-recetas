import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { GetRecipesService } from './services/getrecipes.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchIngredientesComponent } from './search-ingredientes/search-ingredientes.component';
import { SearchNutrientsComponent } from './search-nutrients/search-nutrients.component';
import { routing } from './app.routing';
import { TruncatestringPipe } from './pipes/truncatestring.pipe';
import { NoimagePipe } from './pipes/noimage.pipe';
import { LoadingComponent } from './loading/loading.component';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchIngredientesComponent,
    SearchNutrientsComponent,
    TruncatestringPipe,
    NoimagePipe,
    LoadingComponent,
    RecipedetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing
  ],
  providers: [GetRecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
