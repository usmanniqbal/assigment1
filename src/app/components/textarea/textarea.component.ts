import { Component, OnInit, Input } from '@angular/core';
import { BaseEditor } from '../baseEditor/base.editor'

@Component({
    selector: 'my-textarea',
    templateUrl: 'textarea.component.html'
})
export class TextareaComponent extends BaseEditor {
	constructor() {
		super();
	}
}