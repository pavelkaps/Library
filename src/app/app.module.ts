import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LibraryComponent } from './components/library/library.component';
import { ArticleComponent } from './components/article/article.component';

import {MdCardModule, MdButtonModule, MdToolbarModule} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
