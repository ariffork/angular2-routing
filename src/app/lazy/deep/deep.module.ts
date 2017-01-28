import {NgModule} from "@angular/core";
import {routing} from "./deep-routing";
import {DeepComponent} from "./deep.component";

@NgModule({
  imports: [
    routing
  ],
  declarations: [DeepComponent]
})
export class DeepModule {}
