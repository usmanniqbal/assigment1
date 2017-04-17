import { Component, OnInit, Input } from '@angular/core';
import { BaseEditor } from '../baseEditor/base.editor'

@Component({
    selector: 'my-radiobutton',
    templateUrl: 'radiobutton.component.html'
})
export class RadiobuttonComponent extends BaseEditor {
  	constructor() {
		super();
	}
}