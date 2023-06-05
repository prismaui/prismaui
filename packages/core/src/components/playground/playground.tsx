import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'prm-playground',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class Playground {
  @State() toggle: boolean = false;
  @State() isToastOpen1: boolean = false;
  @State() isToastOpen2: boolean = false;
  @State() isPopupOpen:boolean = false

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
    this.isToastOpen2 = false;
  }

  togglePopup = () =>{
    this.isPopupOpen = !this.isPopupOpen
  }

  closePopup = () =>{
    this.isPopupOpen = false
  }


  toggleDrawer = () => {
    this.toggle = !this.toggle;
  };


  render() {
    return (
      <Host>
        <prm-button round="md" size="xl" onClick={this.toggleDrawer}>
          Test Drawer
        </prm-button>
        <prm-drawer
          toggle={this.toggle}
          variant="primary"
          animation="slide-top"
        >
          <prm-button variant='danger' onClick={this.toggleDrawer}>Close</prm-button>
        </prm-drawer>
        <prm-button round="md" size="xl" onClick={this.toggleToast1}>Test Toast</prm-button>
        <prm-button variant='secondary' round="md" size="xl" onClick={this.togglePopup}>Test popup</prm-button>

        <prm-toast onClose={this.handleToastClosed1} show={this.isToastOpen1} position="top-left" timer={5000} animation="slide-bottom" variant="success" size="lg" message="This is a success toast!"></prm-toast>
        <prm-toast onClose={this.handleToastClosed2} show={this.isToastOpen2} position="top-left" timer={5000} animation="slide-bottom" variant="success" size="lg" message="This is a success toast!"></prm-toast>

        <prm-popup size='full' isOpen={this.isPopupOpen}>
          <prm-button onClick={this.closePopup} variant='danger'>Closepopup</prm-button>
        </prm-popup>

      </Host>
    );
  }
}
