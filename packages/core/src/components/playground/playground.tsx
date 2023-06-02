import { Component, h, Host } from '@stencil/core';
import toastStore from '../toast/toast-store';
@Component({
  tag: 'prm-playground',
  styleUrl: 'playground.scss',
  shadow: true,
})
export class Playground {
  toggleToast = () => {
    toastStore.addToast({
      id: Date.now(),
      message: 'Your message here',
      variant: 'primary',
      size: 'md',
      position: 'top-right',
      timer: 3000,
      animation: 'fade',
    });
    
  }

  render() {
    return (
      <Host>
        <prm-button round="md" size="xl" onClick={this.toggleToast}>Test</prm-button>
      </Host>
    );
  }
}
