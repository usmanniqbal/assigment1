import { Component, OnInit, Input } from '@angular/core';
import { BaseEditor } from '../baseEditor/base.editor'

@Component({
    selector: 'my-select',
    templateUrl: 'select.component.html'
})
export class SelectComponent extends BaseEditor {
 	constructor() {
		super();
	}
}