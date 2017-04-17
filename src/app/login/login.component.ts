import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../core/service/user.service';
import { LocalStorage } from '../core/helper/localStorage';
import { BaseComponent } from '../core/component/Base.Component';

import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    templateUrl: 'login.component.html',
    styleUrls: ['login.css']
})
export class LoginComponent extends BaseComponent {

    model: any = {};
    returnUrl: string;

    constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
        super(userService)

        this.localStorage.clear();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    async login() {

        const dto = await this.userService.login(this.model.username, this.model.password);

        if (dto.IsSuccess) {
            this.localStorage.set('token', 'bearer '.concat(dto.Data.Session.token));
            this.localStorage.set('data', dto.Data);
            this.toaster.success('Logged in successfully', 'Authenticated');

            this.router.navigate(['home']);
        } else {
            console.log(dto.Errors);
            this.toaster.error(dto.Errors[0].Description);
        }
    }
}
