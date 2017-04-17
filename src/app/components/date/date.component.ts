import { Component, OnInit, Input } from '@angular/core';
import { BaseEditor } from '../baseEditor/base.editor'

@Component({
	selector: 'my-date',
	templateUrl: 'date.component.html'
})

export class DateComponent extends BaseEditor {
	constructor() {
		super();
	}
}