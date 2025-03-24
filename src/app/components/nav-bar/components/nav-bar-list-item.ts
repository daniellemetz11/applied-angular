import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { NavBarItem } from '../types';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-list-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <li>
      <a class="hover:bg-secondary" [routerLink]="[link().href]"
        ><span class="mx-3">{{ link().label }}</span></a
      >
    </li>
  `,
  styles: ``,
})
export class NavBarListItemComponent {
  link = input.required<NavBarItem>();
}
