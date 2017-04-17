import { Component, OnInit, Injectable } from '@angular/core';
import { BaseService } from './Base.Service';
import { DataTransferObject } from '../entities/DataTransferObject';

@Injectable()
export class UserService extends BaseService {
    constructor() {
        super('utuser');
    }

    async login(username: string, password: string) {
        const dto: DataTransferObject = <DataTransferObject>{};
        dto.Data = {
            user: {
                username: username,
                password: password
            }
        };
        const result = await this.post('login', dto);

        if (result.IsSuccess) {
            BaseService.headers['Authorization'] = 'bearer '.concat(result.Data.Session.token);
        }

        return result;
    }
}
