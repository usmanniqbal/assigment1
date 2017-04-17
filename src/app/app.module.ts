import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppConstants } from './app.constant';

// Routing Module
import { AppRoutingModule } from './app.routing';

// Control Components
import { ComponentModule } from './components/components';

// Core
import { CoreModule } from './core/core.module';

// Shell
import { ShellModule } from './ut.shell/shell.module'

// Startup modules
import { LoginModule } from './login/login.module';


@NgModule({
  imports: [
    HttpModule,
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    LoginModule,

    // Custom Modules
    ComponentModule,
    CoreModule,
    ShellModule

  ],
  declarations: [
    AppComponent
  ],
  providers:
  [
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    AppConstants.injector = injector;
  }
}
