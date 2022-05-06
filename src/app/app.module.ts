import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import '@abgov/web-components';
import { PrintLayoutComponent } from './components/print-layout.component';
import { PrintService } from './print.service';
import { AppRoutingModule } from './app.routing';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, PrintLayoutComponent],
  providers: [
    PrintService,
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
