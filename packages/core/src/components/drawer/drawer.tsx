import { Component, h, Prop, Element, Host, Event, EventEmitter, State, Watch } from '@stencil/core';

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
  @State() isOpen:boolean = false

  @Watch('toggle')
  onShowChange(newValue: boolean) {
    this.toggle = newValue;
  }

  componentWillRender() {
    this.isOpen = this.toggle;
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
        <div class={`drawer ${this.variant} ${this.animation} ${this.isOpen ? 'open' : 'close'}`}>
          {
            this.toggle && <div class="drawer-content">
              <slot />
            </div>
          }
        </div>
      </Host>
    );
  }

}
