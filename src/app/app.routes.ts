import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard';
import { AboutComponent } from './pages/about';

export const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('./features/demos/demos.routes').then((r) => r.Demo_ROUTES),
  },
];
