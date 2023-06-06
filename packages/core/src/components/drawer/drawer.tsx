import { Component, h, Prop, Event, EventEmitter, Watch, State } from '@stencil/core';

@Component({
  tag: 'prm-drawer',
  styleUrl: 'drawer.scss',
  shadow: true
})
export class Drawer {
  @Prop({ mutable: true }) toggle: boolean = false;
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) animation: | 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Event({ eventName: 'close' }) onClose: EventEmitter<void>;
  @State() isOpen: boolean = false;

  componentDidLoad() {
    this.isOpen = this.toggle;
  }

  @Watch('toggle')
  onShowChange(newValue: boolean) {
    this.isOpen = newValue;
  }

  render() {
    return (
      <div class={`drawer-overlay ${this.isOpen ? 'open' : ''}`}>
        <div
          class={`drawer-content ${this.animation} ${this.isOpen ? 'open' : 'close'} ${this.variant}`}>
          {this.isOpen && <slot />}
        </div>
      </div>
    );
  }
}
