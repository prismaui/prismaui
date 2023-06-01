import { Component, h, Host, State } from '@stencil/core';
@Component({
  tag: 'prm-playground',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class Playground {
  @State() isPopupOpen: boolean = false;

  togglePopup = () => {
    this.isPopupOpen = !this.isPopupOpen;
  }

  render() {
    return (
      <Host>
        <prm-button round="md" size="xl" onClick={this.togglePopup}>Test</prm-button>
        <prm-popup isOpen={this.isPopupOpen} size="full" data={''}>
          test
        </prm-popup>
      </Host>
    );
  }
}
