import { Component, OnInit } from '@angular/core';
import { IProduct } from './../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle: String = 'Product List';
  products: IProduct [] = [];
  noteavg: number;
  errorMessage: string;

  constructor(private productService: ProductService) {
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

  ngOnInit(): void {
      this.productService.getProducts()
              .subscribe(products => this.products = products,
                          error => this.errorMessage = <any>error);

    this.computeAvg();
  }


}
