import {NgModule} from "@angular/core";
import {ThirdLevelRoutingModule} from "./third-level-routing.module";
import {ThirdLevelComponent} from "./third-level.component";

@NgModule({
  imports: [
    ThirdLevelRoutingModule
  ],
  declarations: [ThirdLevelComponent]
})
export class ThirdLevelModule { }
