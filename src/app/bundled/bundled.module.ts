import {NgModule} from "@angular/core";
import {BundledComponent} from "./bundled.component";
import {Routes, RouterModule} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: BundledComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [BundledComponent]
})
export class BundledModule { }
