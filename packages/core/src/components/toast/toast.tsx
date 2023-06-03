import { Component, Prop, h, State, Element } from '@stencil/core';

@Component({
  tag: 'prm-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class PrmToast {
  @Element() el: HTMLElement;

  @Prop() message: string;
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  @Prop() timer: number = 3000;
  @Prop() animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Prop() closable: boolean = true;

  @State() visible: boolean = true;

  componentWillLoad() {
    setTimeout(() => {
      this.visible = false;
    }, this.timer);
  }

  componentDidRender() {
    const container = document.querySelector(`.toast-container.${this.position}`) || this.createToastContainer();
    container.appendChild(this.el);
  }

  createToastContainer() {
    const container = document.createElement('div');
    container.className = `toast-container ${this.position}`;
    container.style.position = 'fixed';
    container.style.zIndex = '1000';

    switch (this.position) {
      case 'top-left':
        container.style.top = '1rem';
        container.style.left = '1rem';
        break;
      case 'top-right':
        container.style.top = '1rem';
        container.style.right = '1rem';
        break;
      case 'bottom-left':
        container.style.bottom = '1rem';
        container.style.left = '1rem';
        break;
      case 'bottom-right':
        container.style.bottom = '1rem';
        container.style.right = '1rem';
        break;
    }

    document.body.appendChild(container);
    return container;
  }

  closeToast() {
    this.visible = false;
  }

  render() {
    return (
      <div class={`toast ${this.variant} ${this.size} ${this.animation} ${this.visible ? 'visible' : 'hidden'}`}>

        <div class="toast-content">{this.message}</div>
        {this.closable && <button onClick={() => this.closeToast()} class="close-btn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>}
      </div>
    );
  }
}