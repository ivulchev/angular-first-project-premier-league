import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import {FirebaseUIModule, firebase, firebaseui} from 'firebaseui-angular';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { firebaseUiAuthConfig } from './firebaseInit/firebaseUiAuthConfig';
import { environment } from './firebaseInit/environment';

import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { TablesComponent } from './components/tables/tables.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { ResultsComponent } from './components/results/results.component';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PostsComponent } from './components/posts/posts.component';
import { MyPostsComponent } from './components/my-posts/my-posts.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { StoreModule } from '@ngrx/store';
import { PostDetailsComponent } from './components/post-details/post-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    FixturesComponent,
    ResultsComponent,
    DetailsComponent,
    HomeComponent,
    PostsComponent,
    MyPostsComponent,
    LoginComponent,
    RegisterComponent,
    CreatePostsComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ErrorPageComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FirebaseUIModule.forRoot(firebaseUiAuthConfig),
    FormsModule,                               
    ReactiveFormsModule, StoreModule.forRoot({}, {})                        
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { 

  
}

