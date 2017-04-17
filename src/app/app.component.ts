import { Component, ViewContainerRef } from '@angular/core';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'body',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(
        private _toastr: ToastsManager,
        private vRef: ViewContainerRef
    ) {
        this._toastr.setRootViewContainerRef(vRef);
    }
}
