import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'my-button',
    templateUrl: 'button.component.html',
        styleUrls: ['button.css'],
})
export class ButtonComponent implements OnInit {

    @Input() label : string;
    constructor() { }

    ngOnInit() { }
}