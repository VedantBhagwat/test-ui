import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

const baseUrl = environment.baseUrl;


@Injectable()
export class HttpService {
    constructor(private _httpClient: HttpClient) { }

    doLoginPost(url: string, data: any) {
        let headers = new HttpHeaders({
			'content-type':"application/json"
		});
        return this._httpClient.post((baseUrl + url), data);
        // return this._httpClient.post((baseUrl + url), data), headers;
    }

    doPost(url: string, data: any) {
        // let headers = new HttpHeaders({
		// 	'content-type':"application/json"
		// });
        // return this._httpClient.post((baseUrl + url), data), headers;
        return this._httpClient.post((baseUrl + url), data);
    }

    doPatch(url: string, data: any) {
        return this._httpClient.patch((baseUrl + url), data);
    }

    doDelete(url: string) {
        return this._httpClient.delete((baseUrl + url));
    }

    doGet(url: string) {
        return this._httpClient.get(baseUrl + url);
    }
}