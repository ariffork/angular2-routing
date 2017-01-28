import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeepComponent } from './deep.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DeepComponent
  },
  {
    path: 'third',
    loadChildren: './third-level/third-level.module#ThirdLevelModule'
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
