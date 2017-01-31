import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SimpleRouteComponent} from './simple-route/simple-route.component';
import {BundledModule} from './bundled/bundled.module';

export function loadBundledModule() { return BundledModule; }

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SimpleRouteComponent
  },
  {
    path: 'bundled',
    loadChildren: loadBundledModule // not lazy load
    // loadChildren: './bundled/bundled.module#BundledModule' // lazy load
  },
  {
    path: 'lazy',
    loadChildren: './lazy/lazy.module#LazyModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
