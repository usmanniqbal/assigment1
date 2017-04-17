import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import { PageNotFoundComponent } from './pagenotfound.component';
import {PageNotFoundRoutingModule} from './pagenotfound.routing';

@NgModule({
    imports: [CommonModule, PageNotFoundRoutingModule
    ],
    exports: [],
    declarations: [PageNotFoundComponent],
    providers: [],
})
export class PageNotFoundModule { }
