import { Component, OnInit } from '@angular/core';
import { IProduct } from './../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: String = 'Product List';
  products: IProduct [] = [];
  noteavg: number;

  constructor() {
  }

  onRatingClicked(message: string): void {
    this.computeAvg();
  }

  computeAvg(): void {
    let sum: number = 0;
    this.products.forEach(p => {
      sum += p.note;
    });
    this.noteavg = sum / this.products.length;
  }

  imgBtnPrev (product: IProduct) {
    product.curImgIdx = product.curImgIdx == 0 ? product.images.length-1 : product.curImgIdx - 1;
  }

  imgBtnNext (product: IProduct) {
    product.curImgIdx = (product.curImgIdx+1) % product.images.length;
  }

  ngOnInit() {
    this.products.push({
      id : 1,
      images : ['http://img.clubic.com/download/image.php?id=08397394&h=00AB&w=00F8&crop=2&options=YToxOntzOjU6ImNvbG9yIjtzOjU6IndoaXRlIjt9',
      'https://i5.walmartimages.com/asr/f5390ec5-e1bd-4063-9dd5-04c6c90557ab_1.5e9763032059fef31a30ac6e61d940dd.jpeg',
      'http://i.ebayimg.com/00/$T2eC16VHJIkE9qU3kI7NBRY0nzEtl!~~_35.JPG'
      ],
      name : 'Samsung Cell phones',
      note : 5,
      curImgIdx : 0,
      ranking: 0
    });
    this.products.push({
      id : 2,
      images : ['https://heavyeditorial.files.wordpress.com/2015/01/4k-super-bowl-deals-header.jpg',
      'http://11986-presscdn-0-77.pagely.netdna-cdn.com/wp-content/uploads/2012/04/hdtv.jpg',
      'https://fortunedotcom.files.wordpress.com/2012/02/screen-shot-2012-02-01-at-6-37-21-am.png',
      'https://imgcdn.haraj.com.sa/userfiles30/2016-08-20/9420WCBOsK-66P.jpg'
      ],
      name : 'Samsung TV sets',
      note : 4,
      curImgIdx : 0,
      ranking: 0
    });

    this.products.push({
      id : 3,
      images : [],
      name : 'Nintendo video game consoles',
      note : 0,
      curImgIdx : 0,
      ranking: 0
    });


    this.products.push({
      id : 4,
      images : [],
      name : 'Sony video game consoles',
      note : 3,
      curImgIdx : 0,
      ranking: 0
    });


    this.products.push({
      id : 5,
      images : [],
      name : 'Sony TV sets',
      note : 1,
      curImgIdx : 0,
      ranking: 0
    });


    this.products.push({
      id : 6,
      images : [],
      name : 'Apple cell phones',
      note : 2,
      curImgIdx : 0,
      ranking: 0
    });


    this.products.push({
      id : 7,
      images : [],
      name : 'Motorola cell phones',
      note : 3,
      curImgIdx : 0,
      ranking: 0
    });

    this.computeAvg();
  }

}
