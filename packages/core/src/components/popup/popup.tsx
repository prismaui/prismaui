import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'prm-popup',
  styleUrl: 'popup.scss',
  shadow: true
})
export class PrmPopup {
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @Prop() isOpen: boolean = false;
  @Prop() animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';

  @State() isPopupOpen: boolean = false;

  componentWillRender() {
    this.isPopupOpen = this.isOpen;
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  render() {
    return (
      <div class={`popup-overlay ${this.isPopupOpen ? 'open' : ''}`}>
        <div class={`popup-card ${this.size} ${this.isPopupOpen ? 'open' : 'close'} ${this.animation}`}>
          <slot />
        </div>
      </div>
    );
  }
}
