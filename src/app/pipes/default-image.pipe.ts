import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'default'
})
export class DefaultImagePipe implements PipeTransform {

  transform(image: any, args?: any): any {
    return image ? image : "http://saveabandonedbabies.org/wp-content/uploads/2015/08/default.png";;
  }

}
