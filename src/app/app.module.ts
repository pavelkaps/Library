import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpModule }   from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { LibraryComponent } from './components/library/library.component';
import { ArticleComponent } from './components/article/article.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { AuthorizationComponent } from './components/authorization/authorization.component'
import { ArticleDetailComponent, EditDialog } from './components/article-detail/article-detail.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';

import { ResizerDirective } from './directives/resizer.directive';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MemoryArticleService } from './api/article-api';
import { ArticleService } from './services/article.service'
import { EventSharedService } from './services/event-shared.service'
import { AuthService } from './services/auth.service'

import { appRoutes } from './app.routing'

import { AuthGuard } from './guards/auth.guard'

import {
  MdCardModule, 
  MdButtonModule, 
  MdToolbarModule,
  MdInputModule,
  MdCheckboxModule,
  MdIconModule,
  MdTabsModule,
  MdDialogModule,
} from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    ArticleComponent,
    AddArticleComponent,
    AuthorizationComponent,
    ResizerDirective,
    ArticleDetailComponent,
    EditDialog,
    ArticlesPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MdCardModule,
    MdButtonModule,
    MdToolbarModule,
    MdInputModule,
    MdCheckboxModule,
    MdTabsModule,
    MdDialogModule,
    MdIconModule,
    InMemoryWebApiModule.forRoot(MemoryArticleService),
  ],
  providers: [
    ArticleService,
    EventSharedService,
    AuthService,
    AuthGuard
  ],
  entryComponents: [EditDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
