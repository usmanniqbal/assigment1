import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';

@NgModule({
    imports: [CommonModule, FormsModule, LoginRoutingModule],
    exports: [],
    declarations: [LoginComponent]
})

export class LoginModule { }
