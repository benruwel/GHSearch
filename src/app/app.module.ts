import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ViewComponent } from './views/view/view.component';
import { UserComponent } from './views/user/user.component';
import { ReposComponent } from './views/repos/repos.component';
import { HomeComponent } from './views/home/home.component';
import { RepoHighlighterDirective } from './directives/repo-highlighter.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewComponent,
    UserComponent,
    ReposComponent,
    HomeComponent,
    RepoHighlighterDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
