import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class ToolbarEvent {
    private toolBarEvent: Subject<ToolbarEventArg>;
    constructor() {
        this.toolBarEvent = new Subject<ToolbarEventArg>();
    }

    boardcast(key: any) {
        this.toolBarEvent.next(<ToolbarEventArg>{ key });
    }

    click(): Observable<ToolbarEventArg> {
        return this.toolBarEvent.asObservable();
    }
}

export interface ToolbarEventArg {
    key: string
}