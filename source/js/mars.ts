import {Component} from '@angular/core';

@Component({
    selector: '[mars]',
	template: `<svg:circle [attr.fill]="fill" [attr.cx]="cx" [attr.cy]="cy" [attr.r]="r" [attr.stroke]="stroke" [attr.opacity]="opacity" />`
})

export class Mars {
  cx:number = 50;
  cy:number = 50;
  r:number = 30;
  opacity:number = 1.0;
  stroke:string = 'black';
  fill:string = 'darkred';
}
