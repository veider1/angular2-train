import { Injectable } from '@angular/core';
import { IProduct } from './product';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private url: string = 'http://localhost:3000/products';

  constructor(private http: Http) {

  }

  getProducts(): Observable<IProduct[]> {
      return this.http.get(this.url)
          .map((response: Response) => <IProduct[]> response.json())
          .do(data => console.log(JSON.stringify(data)))
          .catch(this.handleError);
  }

  private handleError(error: Response) {
      console.log(error);
      return Observable.throw(error.json().error || 'Server error');
  }

}

