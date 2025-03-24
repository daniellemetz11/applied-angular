import { Routes } from '@angular/router';
import { SignalsDemoComponent } from './pages/signals';
import { DemosComponent } from './demos';
export const Demo_ROUTES: Routes = [
  {
    path: '',
    component: DemosComponent,
    children: [
      {
        path: 'signals',
        component: SignalsDemoComponent,
      },
    ],
  },
];
