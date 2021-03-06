import { Directive, ElementRef } from '@angular/core';
import {BaseInputDirective} from './base-input-directive';

@Directive({
  selector: '[appAnalysisOnly]'
})
export class AnalysisOnlyDirective extends BaseInputDirective {

  constructor(protected el: ElementRef) {
    super(el);
    this.regex = new RegExp(/[^\:\\\/]+([^\:\\\/]*){0,1}$/g);
  }

}
