import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SalutationPipe } from './salutation.pipe';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './auth.service';
import { MovieListComponent } from './movie-list/movie-list.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { DetailsComponent } from './details/details.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { DateFormatPipe } from "./shared/custom.pipe";

let firebaseConfig = {
  apiKey: "AIzaSyDi5XfDy2cbJcApeqU_-7IkU_GbXU97XJE",
  authDomain: "scribe-3b18d.firebaseapp.com",
  databaseURL: "https://scribe-3b18d.firebaseio.com",
  projectId: "scribe-3b18d",
  storageBucket: "scribe-3b18d.appspot.com",
  messagingSenderId: "945627745729",
  appId: "1:945627745729:web:3218854a8360a022fa7340",
  measurementId: "G-DX9G0YVRR0"
};

@NgModule({ declarations: [
        AppComponent,
        SignupComponent,
        LoginComponent,
        HomeComponent,
        CapitalizePipe,
        SalutationPipe,
        MenuComponent,
        MovieListComponent,
        DetailsComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    AngularEditorModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatFormFieldModule,
    MatDialogModule, DateFormatPipe], 
        providers: [AuthService, provideHttpClient(withInterceptorsFromDi()), provideFirebaseApp(() => initializeApp(firebaseConfig)), provideAuth(() => getAuth())] })
 export class AppModule { }