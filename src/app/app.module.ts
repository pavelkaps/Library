import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { LibraryComponent } from './components/library/library.component';
import { ArticleComponent } from './components/article/article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';

import {
  MdCardModule, 
  MdButtonModule, 
  MdToolbarModule,
  MdInputModule,
  MdCheckboxModule,
  MdIconModule
} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ArticleComponent,
    AddArticleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
