import { Component, h, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'prm-popup',
  styleUrl: 'popup.scss',
  shadow: true
})
export class PrmPopup {
  @Prop() size: 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @Prop() isOpen: boolean = false;
  @Prop() animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Prop() component: any = null

  @State() isPopupOpen: boolean = false;
  @Element() hostElement: HTMLElement;

  componentWillRender() {
    this.isPopupOpen = this.isOpen;
  }

  togglePopup() {
    this.isPopupOpen = !this.isPopupOpen;
  }

  render() {
    const ComponentToLoad = this.component ? document.createElement(this.component) : null;

    return (
      <div class={`popup-overlay ${this.isPopupOpen ? 'open' : ''}`}>
        <div class={`popup-card ${this.size} ${this.isPopupOpen ? 'open' : 'close'} ${this.animation}`}>
          {ComponentToLoad ? (
            <slot>
              {h(ComponentToLoad, {
                host: this.hostElement
              })}
            </slot>
          ) : (
            <slot />
          )}
        </div>
      </div>
    );
  }
}
