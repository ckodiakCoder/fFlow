import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  // Landing page
  {
    path: 'home',
    loadComponent: () => import('./landing/landing').then(m => m.Landing),
  },

  // Flows
  {
    path: 'basic',
    loadComponent: () => import('./flows/basic-flow/basic-flow').then(m => m.BasicFlow),
  },
  {
    path: 'easy',
    loadComponent: () => import('./flows/easy-flow/easy-flow').then(m => m.EasyFlow),
  },
  {
    path: 'intermediate',
    loadComponent: () => import('./flows/intermediate-flow/intermediate-flow').then(m => m.IntermediateFlow),
  },
  {
    path: 'complex',
    loadComponent: () => import('./flows/complex-flow/complex-flow').then(m => m.ComplexFlow),
  },
  {
    path: 'advanced',
    loadComponent: () => import('./flows/advanced-flow/advanced-flow').then(m => m.AdvancedFlow),
  },
  {
    path: 'expert',
    loadComponent: () => import('./flows/expert-flow/expert-flow').then(m => m.ExpertFlow),
  },
  {
    path: 'ultimate',
    loadComponent: () => import('./flows/ultimate-flow/ultimate-flow').then(m => m.UltimateFlow),
  },
];
