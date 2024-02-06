import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CommonModule, NgFor, NgIf } from "@angular/common";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { MediaitemComponent } from './mediaitem/mediaitem.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { SearchPipe } from './search.pipe';
// @NgModule({
//     providers: [
//         { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
//     ]
// })
// export class AppModule {
// }

export function getLocalStorage() {
    return (typeof window !== "undefined") ? window.localStorage : null;
}
 @NgModule({
  declarations: [
    AppComponent,
    
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MoviesComponent,
    NotfoundComponent,
    PeopleComponent,
    RegisterComponent,
    TvComponent,
    LoginComponent,
    AboutComponent,
    CartComponent,
    ProductsComponent,
    MediaitemComponent,
    MoviedetailComponent,
    SearchPipe
  ],
   imports: [
    CommonModule,
    BrowserModule,
     AppRoutingModule,
     FormsModule,
     ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
     { provide: 'LOCALSTORAGE', useFactory: getLocalStorage }
  ],
  bootstrap: [AppComponent]
})
 export class AppModule {
 }
