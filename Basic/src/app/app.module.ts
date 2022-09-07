import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { MyInterpolationComponent } from './my-interpolation/my-interpolation.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyTwowayBindingComponent } from './my-twoway-binding/my-twoway-binding.component';
import { MyClassStyleBindingComponent } from './my-class-style-binding/my-class-style-binding.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyInterpolationComponent,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyTwowayBindingComponent,
    MyClassStyleBindingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
