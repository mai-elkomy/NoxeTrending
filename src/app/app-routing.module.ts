import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { authGuard } from './auth.guard';
import { TvComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { MoviesComponent } from './movies/movies.component';
import { AboutComponent } from './about/about.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  { path: 'home',canActivate:[authGuard] ,component: HomeComponent },
  { path: 'about',canActivate:[authGuard], component: AboutComponent },
  { path: 'movies', canActivate: [authGuard], component: MoviesComponent },
  { path: 'movieDetails/:id/:media_type',canActivate:[authGuard], component: MoviedetailComponent },
  { path: 'products',canActivate:[authGuard], component: ProductsComponent },
  { path: 'cart',canActivate:[authGuard], component: CartComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'people',canActivate:[authGuard], component: PeopleComponent },
  { path: 'tv',canActivate:[authGuard], component: TvComponent },
  {path:'**',component:NotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
