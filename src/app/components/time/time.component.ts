import { Component, Input } from '@angular/core';
import { BaseEditor } from '../baseEditor/base.editor'

@Component({
	selector: 'my-time',
	templateUrl: 'time.component.html'
})

export class TimeComponent extends BaseEditor {
	constructor() {
		super();
	}
}