import {Component} from "angular2/core";

@Component({
	selector: "app",
	template: `
		<h1>Welcome to Angular2 Scaffold</h1>
		<p>Quick start for <em>Angular2</em> with <strong>TypeScript</strong></p>
	`
}) //<-- No semicolons here, it breaks the TS compiler
export class AppComponent {}