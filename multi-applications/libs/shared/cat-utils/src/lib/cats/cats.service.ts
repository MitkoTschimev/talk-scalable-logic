import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../cat.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {
  constructor(private http: HttpClient) {}

  getCatList(host?: string): Observable<Cat[]> {
    return this.http.get<Cat[]>('http://localhost:3000/cats');
  }
}
