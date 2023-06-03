import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'prm-popup',
  styleUrl: 'popup.scss',
  shadow: true
})
export class Popup {
  @Prop({reflect:true}) size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @Prop({reflect:true}) isOpen: boolean = false;
  @Prop({reflect:true}) animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';

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
          <div class="popup-header">
            <slot name="header" />
          </div>
          <div class="popup-content">
            <slot />
          </div>
          <div class="popup-footer">
            <slot name="footer" />
          </div>
        </div>
      </div>
    );
  }
}
