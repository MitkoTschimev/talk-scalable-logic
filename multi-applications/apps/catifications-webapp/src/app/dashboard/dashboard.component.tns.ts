import { Component } from '@angular/core';
import { Cat } from '@multi-applications/shared/cat-utils';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'multi-applications-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cats$ = this.http.get<Cat[]>('http://localhost:3000/cats');
  constructor(private http: HttpClient) {}
}
