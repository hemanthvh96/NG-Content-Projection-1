import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppCardComponent } from './card/card.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AppCardComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
