import { Component, h, Host, State } from '@stencil/core';

@Component({
  tag: 'prm-playground',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class Playground {
  @State() toggle: boolean = false;

  toggleDrawer = () => {
    this.toggle = !this.toggle;
  };

  render() {
    return (
      <Host>
        <prm-button round="md" size="xl" onClick={this.toggleDrawer}>
          Test
        </prm-button>
        <prm-drawer
          toggle={this.toggle}
          position="right"
          overlay={true}
          variant="primary"
          animation="slide-left"
        >
          <prm-button variant='danger' onClick={this.toggleDrawer}>Close</prm-button>
        </prm-drawer>
      </Host>
    );
  }
}
