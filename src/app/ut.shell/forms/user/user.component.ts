import { Component, OnInit, Injectable } from '@angular/core';
import { ComponentModule } from '../../../components/components';
import { BaseComponent } from '../../../core/component/Base.Component';
import { UserService } from '../../../core/service/user.service';
import { ToolbarEvent } from '../../../core/events/toolbar.event';

@Component({
	templateUrl: 'user.component.html',
})

@Injectable()
export class UserComponent extends BaseComponent {
	constructor(private userService: UserService) {
		super(userService);

	}
}
