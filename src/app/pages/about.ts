import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: ` <p>this is the about page</p> `,
  styles: ``,
})
export class AboutComponent {}
