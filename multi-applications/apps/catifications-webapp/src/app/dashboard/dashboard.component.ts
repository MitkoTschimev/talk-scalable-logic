import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { CatsService } from '@multi-applications/shared/cat-utils';

@Component({
  selector: 'multi-applications-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cats = this.catsService.getCatList();

  /** Based on the screen size, switch from standard to one column per row */
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private catsService: CatsService) {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe(({ matches }) => (this.isHandset = matches));
  }
}
