import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Account } from '../models/account.model';
import { Transaction } from '../models/transaction.model';




@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiUrl = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 

  constructor(private http: HttpClient) { }

  getAccount(idAccount : number): Observable<Account> {
    let params = new HttpParams().set('idAccount', String(idAccount));
    return this.http.get<Account>(this.apiUrl + '/account/', {params})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  addTransaction(idAccount : number, transaction : Transaction): Observable<Account> {
    let params = new HttpParams().set('idAccount', String(idAccount));
    return this.http.put<Account>(this.apiUrl + '/account/', JSON.stringify(transaction), {params})
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error : any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
