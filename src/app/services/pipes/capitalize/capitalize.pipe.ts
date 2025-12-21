import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customCapitalize'
})
export class CapitalizePipe implements PipeTransform {

  allLowerCase = ['a', 'an', 'of', 'to', 'the', 'on', 'in', 'and', 'from', 'its', 'by', 'at', 'for', 'is', 'was', 'with', 'it', 'it\'s'];
  allupperCase = ['FAOW', 'AMU', 'NET-EN', 'UCC', 'UAPA', 'IIJ', 'IIJ.', 'DAVSS', 'AFSPA', 'NPR-CAA-NRC', 'WSS', 'KG', 'NGO', 'IAWS', 'EP', 'HPV'];
  sentenceEndPunctuations = ['.', '?', '!', '-']

  transform(value: string | undefined, exceptionWords: string[] = []): unknown {
    return this.transformvalue(value ?? '', exceptionWords);
  }

  transformvalue(value: string, exceptionWords: string[] = []) {
    const splittedValue = value.split(' ');
    const transformedValues: string[] = [];
    splittedValue.forEach((word, index) => {
      if (exceptionWords.includes(word)) {
        transformedValues.push(word);
        return;
      }
      if (index === 0) {
        this.allupperCase.includes(word.toUpperCase()) ? transformedValues.push(word.toUpperCase()) : transformedValues.push(this.capitalizeValue(word));
      } else {
        if (this.allupperCase.includes(word.toUpperCase())) transformedValues.push(word.toUpperCase());
        else if (this.allLowerCase.includes(word.toLowerCase())) {
          if (!this.sentenceEndPunctuations.includes(splittedValue[index - 1].charAt(splittedValue[index - 1].length - 1)))
            transformedValues.push(word.toLowerCase());
          else transformedValues.push(this.capitalizeValue(word));
        }
        else transformedValues.push(this.capitalizeValue(word));
      }
    });

    return transformedValues.join(' ');
  }

  capitalizeValue(value: string) {
    let capitalizedvalue = '';
    if (value.charAt(0) === "'" || value.charAt(0) === '"' || value.charAt(0) === '*') {
      capitalizedvalue = value.charAt(0) + value.charAt(1).toUpperCase() + value.slice(2).toLowerCase();
    } else {
      capitalizedvalue = value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
    return capitalizedvalue;
  }

}
