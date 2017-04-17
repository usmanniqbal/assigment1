import { Http, HttpModule, RequestOptionsArgs, Headers } from '@angular/http';
import { Injectable, Injector, ReflectiveInjector, Provider } from '@angular/core';

@Injectable()
export class HttpHelper {
    constructor(private http: Http) {
    }

    private async request(url, method: string, headers?: Headers, body?): Promise<any> {
        const options: RequestOptionsArgs = <RequestOptionsArgs>{};

        if (body) {
            options.body = body;
        }

        if (method) {
            options.method = method;
        }

        if (headers) {
            options.headers = headers;
        }


        return await new Promise<any>((resolve, reject) => this.http.request(url, options)
            .subscribe(response => {
                resolve(this.handleResponse(response));
            }, error => {
                reject(this.handleError(error));
            }));
    }

    async get<T>(url: string, headers?): Promise<T> {
        return await this.request(url, 'Get', this.getHeaders(headers));
    }

    async post<T>(url: string, headers?, body?: any): Promise<T> {
        return await this.request(url, 'Post', this.getHeaders(headers), body);
    }

    async put<T>(url: string, headers?, body?: any): Promise<T> {
        return await this.request(url, 'Put', this.getHeaders(headers), body);
    }

    async delete<T>(url: string, headers?, body?: any): Promise<T> {
        return await this.request(url, 'Delete', this.getHeaders(headers), body);
    }

    private handleResponse(response: any): any {
        let result;
        try {
            const body = response.json();

            result = body || {};
        } catch (e) {
            result = {};
        }

        return result;
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';

        if (error.status === 500 || error.status === 404) {
        }

        return errMsg;
    }

    private getHeaders(headers: {}) {
        const result: Headers = new Headers();
        const keys = Object.keys(headers);

        keys.forEach(x => result.set(x, headers[x]));

        return result;
    }
}
