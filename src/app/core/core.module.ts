import { NgModule } from '@angular/core';

import { BaseComponent } from './component/Base.Component';
import { BaseService } from './service/Base.Service';
import { UserService } from './service/user.service';
import { ToolbarEvent } from './events/toolbar.event';
import { HttpHelper } from './helper/http.Helper';
import { LocalStorage } from './helper/localStorage';
import { AuthGuard } from './helper/auth.guard';

@NgModule({
    imports: [],
    providers: [
        ToolbarEvent,
        UserService,
        HttpHelper,
        LocalStorage,
        AuthGuard
    ]
})

export class CoreModule {

}
