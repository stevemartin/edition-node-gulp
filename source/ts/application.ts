import {Component} from '@angular/core';
import {Mars} from './mars';
import {Rocket} from './rocket';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'cm-app',
  template: `<div>
  <svg height="100" width="100">
	<g mars/>
	<g rocket/>
  </svg>
</div>
`,
  directives: [Mars, Rocket]
})

export class CmApp {
  stroke: '#000000'
  mars:Mars;
}

bootstrap(CmApp)
