import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './../product';

@Pipe({
    name: 'productFilter'
})

export class ProductFilter implements PipeTransform {
    transform(prods: IProduct[], filterBy: string): IProduct[] {
        
        if (!filterBy || filterBy.length < 2) {
            return prods;
        }
        filterBy = filterBy.toLowerCase();
        return prods.filter(p => {
            return p.name.toLowerCase().indexOf(filterBy) >= 0
        })
    }
}
