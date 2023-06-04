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
          position="left"
          touchFriendly={true}
          overlay={true}
          color="primary"
          animation="slide-left"
        >
          <div class="prm-drawer__content">
            <h2>Menu</h2>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </prm-drawer>
      </Host>
    );
  }
}
