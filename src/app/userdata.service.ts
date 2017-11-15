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

  public getKeysForHashing(user: string) {
    return this.http.post(this.hashServiceUrl, user, httpOptions)
    
  }
  private extractData(res: Response) {
    let body = res.json();
          console.log(body);
      }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
      }
  /*   addHero(hero: Hero): Observable<Hero> {
      return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
        tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
        catchError(this.handleError('addHero'))
      );
    } */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
