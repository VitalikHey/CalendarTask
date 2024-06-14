import { Pipe, PipeTransform } from '@angular/core';
import {Address} from "../../component/common.types";

@Pipe({
  name: 'streetHome'
})
export class StreetHomePipe implements PipeTransform {

  transform(value: Address): string {
    return `${value.street} ${value.homeNumber}`
  }

}
