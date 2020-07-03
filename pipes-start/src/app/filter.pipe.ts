import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
  pure: false // this property will help in calculating the pipe again and again whenever there is any data change on the page.
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string, propName: string) {
    if (value.length === 0 || filterString === "") {
      return value;
    }

    const resultArray = [];
    for (const item of value) {
      if (item[propName] === filterString) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}
