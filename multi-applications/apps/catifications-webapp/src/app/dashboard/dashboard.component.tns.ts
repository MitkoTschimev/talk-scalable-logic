import { Component } from '@angular/core';

@Component({
  selector: 'multi-applications-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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
}
