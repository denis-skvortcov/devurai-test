import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, take} from 'rxjs/operators';
import {ResultFind} from '../../models/result-find';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) {
  }

  find(query: string): Observable<ResultFind> {
    const options = {
      params: new HttpParams().set('q', query).set('lang', 'ru').set('units', 'imperial')
    };
    return this.http.get<ResultFind>('/data/2.5/find', options)
      .pipe(
        take(1)
      );
  }
}
