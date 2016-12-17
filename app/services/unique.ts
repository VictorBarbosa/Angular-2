import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../model/person'
@Pipe({
    name: 'unique'
})

export class UniquePipe implements PipeTransform {
    output: any[] = []
    keys: any[] = []

    transform(collection: any[], keyname: any): any {
        collection.forEach(item => {
            var key = item[keyname];
            if (this.keys.indexOf(key) === -1) {
                this.keys.push(key);
                this.output.push(item);
            }
        });
        return this.output;
    }










}




