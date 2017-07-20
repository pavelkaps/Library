import { LibraryComponent } from './components/library/library.component'
import { AuthorizationComponent } from './components/authorization/authorization.component'
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { ArticlesPageComponent } from './components/articles-page/articles-page.component';
import { AuthGuard } from './guards/auth.guard'

import { Routes } from '@angular/router';

const itemRoutes: Routes = [
    { path: '', component: ArticlesPageComponent},
    { path: 'about/:id', component: ArticleDetailComponent},
];

export const appRoutes: Routes =[
    { path: 'auth', component: AuthorizationComponent },
    { path: 'app', component: LibraryComponent, children: itemRoutes, canActivate: [AuthGuard]},
    { path: '**', redirectTo: '/app' }
];