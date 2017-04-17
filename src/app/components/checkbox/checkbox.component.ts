import { Component, OnInit, Input } from '@angular/core';
import { BaseEditor } from '../baseEditor/base.editor'

@Component({
    selector: 'my-checkbox',
    templateUrl: 'checkbox.component.html'
})
export class CheckboxComponent extends BaseEditor {
	constructor() {
		super();
	}
}