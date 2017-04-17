import { Injectable, Injector, ReflectiveInjector } from '@angular/core';

import { HttpHelper } from '../helper/http.Helper';
import { DataTransferObject } from '../entities/DataTransferObject';
import { AppConstants } from '../../app.constant';
import { LocalStorage } from '../helper/localStorage';


@Injectable()
export abstract class BaseService {
    protected static headers: {} = {};

    private url: string = AppConstants.urls.api.base;
    private httpHelper: HttpHelper;
    protected localStorage: LocalStorage;

    constructor(private controller: string) {
        this.httpHelper = AppConstants.injector.get(HttpHelper);
        this.localStorage = AppConstants.injector.get(LocalStorage);

        const token = this.localStorage.get('token');

        BaseService.headers['Content-Type'] = 'application/json';
        BaseService.headers['Authorization'] = token;
        BaseService.headers['Access-Control-Allow-Origin'] = '*';
    }

    async moveNext(nextOf: any) {
        const dto = await this.get('next', nextOf);

        return dto;
    }

    async movePrevious(previousOf: any) {
        const dto = await this.get('previous', previousOf);

        return dto;
    }

    async moveLast() {
        const dto = await this.get('last');

        return dto;
    }

    async moveFirst() {
        const dto = await this.get('first');

        return dto;
    }

    async GetByKey(key: any) {
        const dto = await this.get('', key);

        return dto;
    }

    async save(dto: DataTransferObject) {
        let result;

        if (dto.KeyValue) {
            result = await this.put('', dto);
        }
        else {
            result = await this.post('', dto);
        }

        return result;
    }

    // HTTP Method
    async get(method?: string, params?: [any]): Promise<DataTransferObject> {
        return await this.httpHelper.get<DataTransferObject>(this.getUrl(method, params), BaseService.headers);
    }

    async post(method: string, body?: DataTransferObject, params?: [any]): Promise<DataTransferObject> {
        return await this.httpHelper.post<DataTransferObject>(this.getUrl(method, params), BaseService.headers, body);
    }

    async put(method: string, body?: DataTransferObject, params?: [any]): Promise<DataTransferObject> {
        return await this.httpHelper.put<DataTransferObject>(this.getUrl(method, params), BaseService.headers, body);
    }

    async delete(method: string, body?: DataTransferObject, params?: [any]): Promise<DataTransferObject> {
        return await this.httpHelper.delete<DataTransferObject>(this.getUrl(method, params), BaseService.headers, body);
    }

    //  Private Method
    private getUrl(method: string, params?: any): string {
        let result: string;

        result = this.url.concat(this.controller).concat('/v2/').concat(method);

        if (params) {
            result = result.concat('/').concat(Array.isArray(params) ? params.join('/') : params);
        }

        return result;
    }
}
