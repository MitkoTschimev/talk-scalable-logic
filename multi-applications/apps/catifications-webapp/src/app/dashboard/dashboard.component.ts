import { Component } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'multi-applications-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  cats = [
    { name: 'Daria', image: 'https://public-vapxwpcpxj.now.sh/daria.png', description: 'Best partner for cuddling' },
    { name: 'Cappuccina', image: 'https://public-vapxwpcpxj.now.sh/cappuccina.png', description: 'Lovely Mommy' },
    { name: 'Koala', image: 'https://public-vapxwpcpxj.now.sh/koala.png' },
    { name: 'Pumpkin', image: 'https://public-vapxwpcpxj.now.sh/pumpkin.png' },
    { name: 'Coco', image: 'https://public-vapxwpcpxj.now.sh/coco.png' },
    { name: 'Pitbull', image: 'https://public-vapxwpcpxj.now.sh/pitbull.png' }
  ];

  /** Based on the screen size, switch from standard to one column per row */
  isHandset: boolean;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(Breakpoints.Handset)
      .subscribe(({ matches }) => (this.isHandset = matches));
  }
}