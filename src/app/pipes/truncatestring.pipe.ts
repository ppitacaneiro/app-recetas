import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatestring'
})
export class TruncatestringPipe implements PipeTransform {

  transform(value: string, limit = 25, completeWords = false, ellipsis = '...'): string {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }

}
