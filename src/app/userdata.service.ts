import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserdataService {

  private userid;
  private usepassword;

  hashServiceUrl = 'http://84cdac9f.ngrok.io/BlockChainCorePublisher/rest/getKeysForHashing';
  BlockServerUrl = '';

  constructor(private http: HttpClient) { }

  login() {

  }

  getKeysForHashing(user: string) {
    return this.http.post(this.hashServiceUrl, user, httpOptions)
      .subscribe((resp: Response) => { resp.json(); }, err => { });
  }


}
