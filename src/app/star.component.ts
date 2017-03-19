import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProduct } from './product';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  @Input() prod: IProduct;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  onClickStar(starr): void {
    this.prod.note = starr;
    this.ratingClicked.emit();
  }

  ngOnInit() {
  }

}
