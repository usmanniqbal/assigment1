import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { LabelComponent } from './label/label.component';
import { TextboxComponent } from './textbox/textbox.component';
import { DateComponent } from './date/date.component';
import { TextareaComponent } from './textarea/textarea.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ButtonComponent } from './button/button.component';
import { TimeComponent } from './time/time.component';

import { FormContainerComponent } from './formcontainer/formcontainer.component';


@NgModule({
    imports: [
        FormsModule,
        RouterModule
    ],
    declarations: [
        LabelComponent,
        TextboxComponent,
        DateComponent,
        TextareaComponent,
        CheckboxComponent,
        RadiobuttonComponent,
        ButtonComponent,
        TimeComponent,
        ToolbarComponent,
        FormContainerComponent

    ],
    exports: [
        TextboxComponent,
        DateComponent,
        TextareaComponent,
        CheckboxComponent,
        RadiobuttonComponent,
        ToolbarComponent,
        ButtonComponent,
        TimeComponent,
        FormContainerComponent
    ]
})

export class ComponentModule {

}