import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
        path : '',
        component: HomeComponent,
    },
    {
        path : 'details/:id',
        component: DetailComponent,
    }
];
