import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  @Input() rating: number = 0;

  constructor() {}

  getStarsArray(): number[] {
    const fullStars = Math.floor(this.rating);
    const halfStar = (fullStars - this.rating != 0) ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return Array(fullStars).fill(1).concat(Array(halfStar).fill(0.5)).concat(Array(emptyStars).fill(0));
  }
}
