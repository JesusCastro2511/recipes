import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
//Formulario
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
//Firebase 
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NavbarComponent } from './navbar/navbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { SearchComponent } from './search/search.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { RecipeAPIComponent } from './recipe-api/recipe-api.component';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { NewRecipeComponent } from './new-recipe/new-recipe.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';

var firebaseConfig = {
  apiKey: 'AIzaSyB64c3Az7iTZ6xmC7P0Brmnsz35DLFCNZI',
    authDomain: 'meal-17c0d.firebaseapp.com',
    databaseURL: 'https://meal-17c0d.firebaseio.com',
    projectId: 'meal-17c0d',
    storageBucket: 'meal-17c0d.appspot.com',
    messagingSenderId: '798813284514',
    appId: '1:798813284514:web:4c4b4c234ba5b420210ffb'
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    RecipeComponent,
    SearchComponent,
    SpinnerComponent,
    RecipeAPIComponent,
    EditRecipeComponent,
    NewRecipeComponent,
    CrearCuentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
