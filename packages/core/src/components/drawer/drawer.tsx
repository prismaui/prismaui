import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
  tag: 'prm-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class Drawer {
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Event({ eventName: 'close' }) onClose: EventEmitter<void>;
  @State() isOpen: boolean = false;

  connectedCallback() {
    this.isOpen = true;
  }

  closeDrawer() {
    this.isOpen = false;
    this.onClose.emit();
  }

  render() {
    return (
      <div class={`drawer-overlay ${this.isOpen ? '' : 'close'}`}>
        <div class={`drawer-content ${this.animation} ${this.isOpen ? 'open' : 'close'} ${this.variant}`}>
          <slot />
        </div>
      </div>
    );
  }
}
