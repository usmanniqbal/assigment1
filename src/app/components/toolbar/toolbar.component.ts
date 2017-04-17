import { Component, OnInit } from '@angular/core';

import { ToolbarEvent } from '../../core/events/toolbar.event';

@Component({
    selector: 'my-toolbar',
    templateUrl: 'toolbar.component.html'
})
export class ToolbarComponent implements OnInit {
    constructor(private toolbarEvent: ToolbarEvent) { 

    }

    ngOnInit() { }
}