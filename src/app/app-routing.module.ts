import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { MovieListComponent } from './movie-list/movie-list.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},{
  path: 'home', component:HomeComponent
},{
  path: 'login', component:LoginComponent
},{
  path: 'movie-list', component:MovieListComponent,canActivate:[AuthGuard]
},{ 
  path: 'movie-details/:movie-id', component: DetailsComponent
},{
  path: '**', redirectTo: 'home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
