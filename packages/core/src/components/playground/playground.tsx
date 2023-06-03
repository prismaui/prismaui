import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'prm-playground',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class Playground {
  @State() isToastOpen: boolean = false;

  toggleToast = () => {
    this.isToastOpen = !this.isToastOpen;
  }

  render() {
    return (
      <Host>
        <prm-button round="md" size="xl" onClick={this.toggleToast}>Test</prm-button>

        <prm-toast show={this.isToastOpen} position="top-left" timer={5000} animation="slide-bottom" variant="success" size="lg" message="This is a success toast!"></prm-toast>

      </Host>
    );
  }
}
