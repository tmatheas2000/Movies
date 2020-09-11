import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import {HttpClientModule} from '@angular/common/http';

import * as firebase from 'firebase/app';
import 'firebase/auth';
import { DateFormat } from './shared/custom.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { config } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { SalutationPipe } from './salutation.pipe';
import { MenuComponent } from './menu/menu.component';
import { AuthService } from './auth.service';
import { MovieListComponent } from './movie-list/movie-list.component';

import {
  MatInputModule,
  MatCardModule,
  MatGridListModule,
  MatChipsModule,
  MatDialogModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatFormFieldModule
} from '@angular/material';
import { DetailsComponent } from './details/details.component';

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

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    SalutationPipe,
    MenuComponent,
    MovieListComponent,
    DetailsComponent,
    DateFormat
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularEditorModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    MatDialogModule,
    MatFormFieldModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
 export class AppModule { }