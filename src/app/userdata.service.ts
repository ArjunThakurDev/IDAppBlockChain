import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import * as io from 'socket.io-client';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserdataService {

  private userid;
  private usepassword;
  private socket;
  
  hashServiceUrl = 'http://93bde717.ngrok.io/BlockChainCorePublisher/rest/getKeysForHashing';
  BlockServerUrl = 'ws://93bde717.ngrok.io/BlockChainCorePublisher/registerKeysWithSocket';

  constructor(private http: HttpClient) { }

  login() {

  }

  getKeysForHashing(user: any) {
    console.log(user);
    return this.http.post(this.hashServiceUrl, user, httpOptions)

  }

  getMessages() {
    let observable = new Observable(observer => {
      this.socket = io(this.BlockServerUrl);
      this.socket.on('message', (data) => {
        observer.next(data);
      });
      return () => {
        this.socket.disconnect();
      };
    })
    return observable;
  }


}
