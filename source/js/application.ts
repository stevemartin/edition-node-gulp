import {Component} from '@angular/core';
import {Mars} from './mars';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'my-app',
  template: `<div>
  <svg height="100" width="100">
	<g mars/>
  </svg>
`,
  directives: [Mars]
})

export class MyApp {
  stroke: '#000000'
  mars:Mars;
}

bootstrap(MyApp)
