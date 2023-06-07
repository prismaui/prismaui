import { Component, Prop, h, State, Element, Watch, Event, EventEmitter } from '@stencil/core';
@Component({
  tag: 'prm-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class PrmToast {
  public timeoutId: any;

  @Element() el: HTMLElement;

  @Prop({ reflect: true }) message: string;
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop({ reflect: true }) position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  @Prop({ reflect: true }) timer: number = 3000;
  @Prop({ reflect: true }) animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Prop({ reflect: true }) closable: boolean = true;
  @Prop({ reflect: true, mutable: true }) show: boolean = false;
  @Event({ eventName: 'close' }) onclose: EventEmitter<void>;

  @State() visible: boolean = this.show;

  @Watch('show')
  onShowChange(newValue: boolean) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    if (newValue) {
      this.startTimer();
    }
  }

  componentWillLoad() {
    if (this.show) {
      this.startTimer();
    }
  }

  startTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.closeToast();
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
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    this.show = false;
    this.onclose.emit()
    this.removeToast();
  }

  removeToast() {
    this.el.remove();
  }

  render() {
    // if (!this.show) {
    //   return null
    // }
    return (
      <div class={`toast ${this.variant} ${this.size} ${this.animation} ${this.show ? 'visible' : 'hidden'}`}>
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