import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'multi-applications-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cards = [
    { title: 'Daria', image: '/assets/daria.png', description: 'Best partner for cuddling' },
    { title: 'Cappuccina', image: '/assets/cappuccina.png', description: 'Lovely Mommy' },
    { title: 'Koala', image: '/assets/koala.png' },
    { title: 'Pumpkin', image: '/assets/pumpkin.png' },
    { title: 'Coco', image: '/assets/coco.png' },
    { title: 'Pitbull', image: '/assets/pitbull.png' }
  ];

  /** Based on the screen size, switch from standard to one column per row */
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe(({ matches }) => (this.isHandset = matches));
  }
}
