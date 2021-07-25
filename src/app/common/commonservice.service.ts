import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  private spacexDataurl = 'https://api.spaceXdata.com/v3/launches';
  private _spacexData: any;

  constructor(private http: HttpClient) { }

  getSpaceXServerdata(): Observable<any[]> {
    let url = `${this.spacexDataurl}?limit=100`;
    return this.http.get<any[]>(url);
  }

  getSpaceXdata() {
    return this._spacexData;
  }

  setSpaceXdata(data: any) {
    this._spacexData = data;
  }

  getSpaceXfilterddata(filters: any): Observable<any[]> {
    let url = `${this.spacexDataurl}?limit=100`;
    if (filters) {
      if (filters.yearFilter) {
        url = `${url}&launch_year=${filters.yearFilter}`;
      }
      if (filters.sucessLanding != null) {
        url = `${url}&land_success=${filters.sucessLanding}`;
      }
      if (filters.sucessLaunch != null) {
        url = `${url}&launch_success=${filters.sucessLaunch}`;
      }
    }
    return this.http.get<any[]>(url)
      .pipe(
        tap()
        // catchError()
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
