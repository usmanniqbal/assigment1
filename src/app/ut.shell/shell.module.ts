import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ShellComponent } from './shell.component';
import { ShellRoutingModule } from './shell.routing';

// Layouts
import { ContentComponent } from './home/content/content.component';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';

// core modules
import { CoreModule } from '../core/core.module';
import { ComponentModule } from '../components/components';

// Forms
import { UserComponent } from './forms/user/user.component';

// External components
import { ToastModule, ToastsManager, ToastOptions } from 'ng2-toastr/ng2-toastr';

// Toaster
const toastOptions: ToastOptions = new ToastOptions({
  animate: 'flyRight',
  positionClass: 'toast-top-right',
  showCloseButton: true,
  toastLife: 10000,
  newestOnTop: true
});


@NgModule({
  imports: [
    FormsModule,

    ShellRoutingModule,
    CoreModule,
    ComponentModule,

    // External modules
    ToastModule
  ],
  declarations: [

    ShellComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,

    // Forms
    UserComponent
  ]
})
export class ShellModule { }
