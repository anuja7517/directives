import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicCssDirective } from './shared/directives/bacisCss.Directive';
import { AdvanceCssDirective } from './shared/directives/advanceCss.directive';


@NgModule({
  declarations: [
    AppComponent,
    BasicCssDirective,
    AdvanceCssDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
