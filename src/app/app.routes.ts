import { Routes } from '@angular/router';
import { Testing1Component } from './components/testing1/testing1.component';

export const routes: Routes = [
    {path:'testing1', component:Testing1Component},
    {path:'testing2', loadComponent:() => import('./components/testing2/testing2.component').then((data)=> data.Testing2Component )
}
];
