import { Component, h, Prop, Element, Watch, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'prm-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class PrmDrawer {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) toggle: boolean = false;
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Event({ eventName: 'close' }) onClose: EventEmitter<void>;

  @Watch('toggle')
  toggleChanged() {
  }

  componentWillLoad() {
    // this.updateDrawer();
  }

  disconnectedCallback() {
  }


  handleOverlayClick = () => {
    this.closeDrawer();
  };

  closeDrawer() {
    this.toggle = false;
    this.onClose.emit();
  }

  render() {
    return (
      <Host>
        <div class={`drawer ${this.variant} ${this.animation} ${this.toggle ? 'open' : 'close'}`}>
          <div class="drawer-content">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
