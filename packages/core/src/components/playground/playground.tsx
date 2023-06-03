import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'prm-playground',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class Playground {
  @State() isToastOpen1: boolean = false;
  @State() isToastOpen2: boolean = false;

  toggleToast1 = () => {
    this.isToastOpen1 = !this.isToastOpen1;
    this.isToastOpen2 = !this.isToastOpen2;
  }

  handleToastClosed1 = () => {
    this.isToastOpen1 = false;
  }

  toggleToast2 = () => {
    this.isToastOpen1 = !this.isToastOpen1;
  }

  handleToastClosed2 = () => {
    this.isToastOpen1 = false;
  }


  render() {
    return (
      <Host>
        <prm-button round="md" size="xl" onClick={this.toggleToast1}>Test</prm-button>

        <prm-toast onClose={this.handleToastClosed1} show={this.isToastOpen1} position="top-left" timer={5000} animation="slide-bottom" variant="success" size="lg" message="This is a success toast!"></prm-toast>
        <prm-toast onClose={this.handleToastClosed2} show={this.isToastOpen2} position="top-left" timer={5000} animation="slide-bottom" variant="success" size="lg" message="This is a success toast!"></prm-toast>

      </Host>
    );
  }
}
