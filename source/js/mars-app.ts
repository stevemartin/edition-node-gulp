import {Component} from '@angular/core';
import {Mars} from './mars';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'mars-app',
  template: `<div>
  <svg height="100" width="100">
	<g mars/>
  </svg>
</div>
`,
  directives: [Mars]
})

export class MarsApp {
}

bootstrap(MarsApp)
