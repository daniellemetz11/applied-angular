import {
  Component,
  ChangeDetectionStrategy,
  signal,
  computed,
} from '@angular/core';

@Component({
  selector: 'app-demos-signals',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <p>Signals Demos</p>
    <div>
      <button (click)="decrement()" class="btn btn-error">-</button>
      <span class="m-4 text-lg">{{ current() }}</span>
      <button (click)="increment()" class="btn btn-success">+</button>
    </div>
    @if (showReset()) {
      <button (click)="current.set(0)" class="btn btn-primary">Reset!</button>
    } @else {
      <p>Click the buttons!</p>
    }

    @if (even()) {
      <span class="badge badge-secondary">Even</span>
    } @else {
      <span class="badge badge-accent">Odd</span>
    }
  `,
  styles: ``,
})
export class SignalsDemoComponent {
  current = signal(0);

  //anytime the signals trigger a new value it will update this, that is what the computed keyword is for, showReset() in the if condition
  showReset = computed(() => this.current() !== 0);

  even = computed(() => this.current() % 2 == 0);

  decrement() {
    this.current.set(this.current() - 1);
  }
  increment() {
    this.current.set(this.current() + 1);
  }
}
