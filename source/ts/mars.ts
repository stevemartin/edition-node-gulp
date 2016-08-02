import {Component} from '@angular/core';

@Component({
    selector: '[mars]',
	template: `<svg:circle [attr.fill]="fill" [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r" [attr.stroke]="stroke" [attr.opacity]="opacity" />`
})

export class Mars {
  cx:number = 30;
  cy:number = 30;
  r:number = 29;
  opacity:number = 1.0;
  stroke:string = 'black';
  fill:string = 'darkred';
}
