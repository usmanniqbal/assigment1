import { Component, OnInit, ReflectiveInjector, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { ToolbarEvent } from '../../core/events/toolbar.event';
import { BaseService } from '../service/Base.Service';
import { DataTransferObject } from '../entities/DataTransferObject';
import { AppConstants } from '../../app.constant';
import { LocalStorage } from '../helper/localStorage';

export abstract class BaseComponent implements OnInit {
    private _model: any = {};
    private currentAddOn: any;
    private key: any;
    private activatedRoute: ActivatedRoute;
    private toolbarEvent: ToolbarEvent;
    protected toaster: ToastsManager;
    protected localStorage: LocalStorage;

    constructor(private service: BaseService) {
        this.toolbarEvent = AppConstants.injector.get(ToolbarEvent);
        this.toaster = AppConstants.injector.get(ToastsManager);
        this.activatedRoute = AppConstants.injector.get(ActivatedRoute);
        this.localStorage = AppConstants.injector.get(LocalStorage);
    }


    //  Properties
    get model(): any {
        return this._model;
    }

    set model(value) {
        this._model = value || {};
    }

    async ngOnInit() {
        this.toolbarEvent.click().subscribe(async data => {
            switch (data.key) {
                case ('first'):
                    await this.moveFirst();
                    break;
                case ('last'):
                    await this.moveLast();
                    break;
                case ('next'):
                    await this.moveNext();
                    break;
                case ('previous'):
                    await this.movePrevious();
                    break;
                case ('save'):
                    await this.save();
                    break;
                case ('clear'):
                    await this.clear();
                    break;
            }
        });
    }

    // Service Method
    async moveNext() {
        const dto = await this.service.moveNext(this.key);
        this.setDto(dto);
    }

    async movePrevious() {
        const dto = await this.service.movePrevious(this.key);
        this.setDto(dto);
    }

    async moveLast() {
        const dto = await this.service.moveLast();
        this.setDto(dto);
    }

    async moveFirst() {
        const dto = await this.service.moveFirst();
        this.setDto(dto);
    }

    async clear() {
        this.model = undefined;
        this.currentAddOn = undefined;
        this.key = undefined;
    }

    async save() {
        const dto = this.getDto();
        const result = await this.service.save(dto);
        debugger;
        if (result.IsSuccess)
            this.toaster.success("Record saved successfully");
        else
            this.toaster.error("Error while saving record.");
    }

    private setDto(dto: DataTransferObject) {
        this.model = dto.Data;
        this.currentAddOn = dto.DataAddon;
        this.key = dto.KeyValue;
    }

    private getDto() {
        const result = <DataTransferObject>{
            Data: this.model,
            DataAddon: this.currentAddOn,
            KeyValue: this.key
        };

        return result;
    }
}
