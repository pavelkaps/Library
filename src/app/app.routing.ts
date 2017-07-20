import { LibraryComponent } from './components/library/library.component'
import { AuthorizationComponent } from './components/authorization/authorization.component'
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';

import { Routes } from '@angular/router';

const itemRoutes: Routes = [
    { path: 'app', component: ArticlesPageComponent},
    { path: 'about/:id', component: ArticleDetailComponent},
];

export const appRoutes: Routes =[
    { path: 'auth', component: AuthorizationComponent },
    { path: '', component: LibraryComponent, children: itemRoutes},
    { path: '**', redirectTo: '/app' }
];