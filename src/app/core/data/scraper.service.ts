import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScraperService {

  api = environment.api;

  constructor(
    private _http: HttpClient
  ) { }

  downloadImages(url) {
    return this._http.get(this.api + 'downloadImages?url=' + url, {responseType: 'blob'});
  }

}
