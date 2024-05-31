import { Routes } from '@angular/router';
import { Testing1Component } from './components/testing1/testing1.component';

export const routes: Routes = [
    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', loadComponent:()=> import('./components/login/login.component').then((component)=> component.LoginComponent),},
    {path:'sign-up', loadComponent:()=> import('./components/sig-up/sig-up.component').then((component)=> component.SigUpComponent),},
    {path:'dashboard', loadComponent:()=> import('./components/dashboard/dashboard.component').then((component)=> component.DashboardComponent),
    children: [
        {
          path: 'projects',
          loadComponent: () => import('./components/projects/projects.component').then((component) => component.ProjectsComponent)
        },
        {
          path: 'projects/:id',
          loadComponent: () => import('./components/single-project/single-project.component').then((component) => component.SingleProjectComponent)
        }
      ]
    },
    
    {path:'testing1', component:Testing1Component},
    {path:'testing2', loadComponent:() => import('./components/testing2/testing2.component').then((data)=> data.Testing2Component )
}
];
