import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'plusNumber'
})
export class PlusNumberPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): number | null {
    if (typeof value === "number") {
      return value + 5
    }
    if (typeof value === "string") {
      const num = Number(value)
      if (!isNaN(num)) {
        return num + 5
      }
    }
    return null
  }

}
