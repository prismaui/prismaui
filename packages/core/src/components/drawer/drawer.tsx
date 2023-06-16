import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'prm-drawer',
  styleUrl: 'drawer.scss',
  shadow: true
})
export class Drawer {
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Event({ eventName: 'close' }) onClose: EventEmitter<void>;
  @State() isOpen: boolean = true;

  render() {
    return (
      <div class='drawer-overlay'>
        <div
          class={`drawer-content ${this.animation} ${this.isOpen ? 'open' : 'close'} ${this.variant}`}>
          <slot />
        </div>
      </div>
    );
  }
}
