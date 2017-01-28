import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LazyComponent
  },
  {
    path: 'deep',
    loadChildren: 'app/lazy/deep/deep.module#DeepModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
