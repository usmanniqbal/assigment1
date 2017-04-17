import { Component, Input } from '@angular/core';
import { BaseEditor } from '../baseEditor/base.editor'

@Component({
	selector: 'my-textbox',
	templateUrl: 'textbox.component.html'
})

export class TextboxComponent extends BaseEditor {
	constructor() {
		super();
	}
}

