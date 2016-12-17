import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any[], args: any, field: string): any {

        if (args != null && args != "") {
            var retorno = value.filter(item =>
                item[field].toString().toUpperCase().startsWith(args.toString().toUpperCase())
            );
            return retorno;
        }
        return value;
    }
}