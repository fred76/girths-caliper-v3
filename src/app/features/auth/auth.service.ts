import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, name: string): Observable<any> {
    return this.http.post<any>('/api/login', { email, name });
  }

  pippo(email: string, name: string) {
    fetch(`/api/test`, {
      method: `POST`,
      body: JSON.stringify({
        // `destination` is required.
        destination: email,
        // However, you can POST anything in your payload and it will show up in your verify() method
        name: name,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.success) {
          console.log('  pp p p p p p p p p ');

          console.log(json);
          console.log(json.success);

          // The request successfully completed and the email to the user with the
          // magic login link was sent!
          // You can now prompt the user to click on the link in their email
          // We recommend you display json.code in the UI (!) so the user can verify
          // that they're clicking on the link for their _current_ login attempt
          document.body.innerText = json.code;
          console.log(document.body.innerText);
        }
      });
  }

  test(email: string, name: string): Observable<any> {
    return this.http.post<any>('/api/test', { email, name });
  }
}
