import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { MyComponent } from './my-component/my-component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { PokemonCommunicationService } from './pokemon-communication.service';


@NgModule({
  declarations: [
    App
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    MyComponent
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideHttpClient(),
    PokemonCommunicationService,
  ],
  bootstrap: [App]
})
export class AppModule { }
