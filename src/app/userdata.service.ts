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

<<<<<<< HEAD

  hashServiceUrl = 'http://93bde717.ngrok.io/BlockChainCorePublisher/rest/getKeysForHashing';
=======
  hashServiceUrl = 'http://84cdac9f.ngrok.io/BlockChainCorePublisher/rest/getKeysForHashing';
>>>>>>> da060c82073bcf6a2e8787e3b89e6aff28346c21
  BlockServerUrl = '';

  constructor(private http: HttpClient) { }

  login() {

  }

  getKeysForHashing(user: string) {
    return this.http.post(this.hashServiceUrl, user, httpOptions)
      .subscribe((resp: Response) => { resp.json(); }, err => { });
  }


}
