import { LibraryComponent } from './components/library/library.component'
import { AuthorizationComponent } from './components/authorization/authorization.component'
import { ArticleDetailComponent } from './components/article-detail/article-detail.component';
import { Routes } from '@angular/router';

export const appRoutes: Routes =[
    { path: 'auth', component: AuthorizationComponent },
    { path: 'app', component: LibraryComponent},
    { path: 'about/:id', component: ArticleDetailComponent},
    { path: '**', redirectTo: '/app' }
];