import { Component, h, State } from '@stencil/core';
import toastStore from './toast-store';

@Component({
  tag: 'prm-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class ToastManager {
  @State() toasts: any[] = [];

  componentWillLoad() {
    toastStore.onChange('toasts', toasts => {
      this.toasts = toasts;
    });
  }

  componentDidRender() {
    this.toasts.forEach(toast => {
      setTimeout(() => {
        toastStore.removeToast(toast.id);
      }, toast.timer);
    });
  }

  render() {
    return this.toasts.map(toast => (
      <div class={`toast-container ${toast.position}`}>
        <div class={`toast ${toast.variant} ${toast.size} ${toast.animation}`}>
          {toast.message}
        </div>
      </div>
    ));
  }
}
