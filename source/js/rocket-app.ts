import {Component} from '@angular/core';
import {Rocket} from './rocket';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'rocket-app',
  template: `<div>
  <svg height="100" width="100">
	<g rocket/>
  </svg>
</div>
`,
  directives: [Rocket]
})

export class RocketApp {
}

bootstrap(RocketApp)
