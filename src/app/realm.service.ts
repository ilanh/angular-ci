import { Injectable } from '@angular/core';
import { Realm } from './realm';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RealmService {
  private realmsUrl = 'api/realms';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getRealms(): Observable<Realm[]> {
    return this.http.get<Realm[]>(this.realmsUrl).pipe(
      tap((_) => this.log('fetched realms')),
      catchError(this.handleError<Realm[]>('getRealms', []))
    );
  }

  getRealm(id: number): Observable<Realm> {
    const url = `${this.realmsUrl}/${id}`;
    return this.http.get<Realm>(url).pipe(
      tap((_) => this.log(`fetched realm id=${id}`)),
      catchError(this.handleError<Realm>(`getRealm id=${id}`))
    );
  }

  /** PUT: update the hero on the server */
  updateRealm(realm: Realm): Observable<any> {
    return this.http.put(this.realmsUrl, realm, this.httpOptions).pipe(
      tap((_) => this.log(`updated realm id=${realm.id}`)),
      catchError(this.handleError<any>('updateRealm'))
    );
  }

  /** POST: add a new hero to the server */
  addRealm(realm: Realm): Observable<Realm> {
    return this.http.post<Realm>(this.realmsUrl, realm, this.httpOptions).pipe(
      tap((newRealm: Realm) => this.log(`added realm w/ id=${newRealm.id}`)),
      catchError(this.handleError<Realm>('addRealm'))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteRealm(realm: Realm | number): Observable<Realm> {
    const id = typeof realm === 'number' ? realm : realm.id;
    const url = `${this.realmsUrl}/${id}`;
    return this.http.delete<Realm>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted realm id=${id}`)),
      catchError(this.handleError<Realm>('deleteRealm'))
      );
  }

  searchRealms(term: string): Observable<Realm[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Realm[]>(`${this.realmsUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found realms matching "${term}"`) :
        this.log(`no realms matching "${term}"`)),
        catchError(this.handleError<Realm[]>('searchRealms', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`RealmService: ${message}`);
  }
}
