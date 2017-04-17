import { Component, OnInit, Input } from '@angular/core';


@Component({
    selector: 'my-label',
    templateUrl: 'label.component.html',
    styleUrls: ['label.component.css']
})

export class LabelComponent implements OnInit {
    @Input() label: string;

    ngOnInit() {
    }
}