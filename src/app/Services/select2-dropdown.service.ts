import { Injectable } from '@angular/core';
import { Select2OptionData } from 'ng2-select2';

@Injectable({
  providedIn: 'root'
})
export class Select2DropdownService {

  constructor() { }
  prepareDropDown(optionsArray: Array<Select2OptionData>, data?: any[], selectedValue?) {
    
    if (data) {
      let defualtOption = {
        id: '',
        text: 'Select Option'
      };
      optionsArray.push(defualtOption);
      data.forEach(element => {
        let object = {
          id: element.id,
          text: element.text
        };
        optionsArray.push(object);
      });
    }

    
    
    if (selectedValue) {
      let options = optionsArray;
      optionsArray.forEach(function (item, i) {
        if (item.id == selectedValue) {
          options.splice(i, 1);
          options.unshift(item);
        }
      });
      optionsArray = options;
    }


    return optionsArray;
  }
}
