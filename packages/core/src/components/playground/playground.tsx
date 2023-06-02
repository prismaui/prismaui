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
        {/* <prm-popup animation="scale" isOpen={this.isPopupOpen} size="full">
          <prm-button variant='danger' round="md" size="xl" onClick={this.togglePopup}>Close</prm-button>
        </prm-popup> */}
        <prm-toast position="top-left" duration={5000} animation="slide-bottom" variant="success" size="md" message="This is a success toast!" show={true}></prm-toast>

      </Host>
    );
  }
}
