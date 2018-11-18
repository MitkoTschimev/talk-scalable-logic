import { Injectable } from '@nestjs/common';
import { Cat } from '@multi-applications/shared/cat-utils';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];
  private catIdCount = 1;

  constructor() {
    this.cats = [
      {
        id: this.catIdCount++,
        name: 'Daria',
        gender: 'female',
        image: 'https://public-vapxwpcpxj.now.sh/daria.png'
      },
      {
        id: this.catIdCount++,
        name: 'Cappuccina',
        gender: 'female',
        image: 'https://public-vapxwpcpxj.now.sh/cappuccina.png'
      },
      {
        id: this.catIdCount++,
        name: 'Koala',
        gender: 'female',
        image: 'https://public-vapxwpcpxj.now.sh/koala.png'
      },
      {
        id: this.catIdCount++,
        name: 'Coco',
        gender: 'male',
        image: 'https://public-vapxwpcpxj.now.sh/coco.png'
      },
      {
        id: this.catIdCount++,
        name: 'Pitbull',
        gender: 'male',
        image: 'https://public-vapxwpcpxj.now.sh/pitbull.png'
      },
      {
        id: this.catIdCount++,
        name: 'Pumpkin',
        gender: 'male',
        image: 'https://public-vapxwpcpxj.now.sh/pumpkin.png'
      }
    ];
  }

  findAll(): Cat[] {
    return this.cats;
  }
}
