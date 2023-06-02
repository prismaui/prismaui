import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'prm-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class PrmToast {
  @Prop() position: 'top-center' | 'top-right' | 'top-left' | 'bottom-center' | 'bottom-right' | 'bottom-left' | 'center' = 'top-right';
  @Prop() duration: number = 5000;
  @Prop() animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop() message: string = '';
  @Prop() show: boolean = false;

  private timer: any;

  showToast() {
    this.show = true;
    this.timer = setTimeout(() => {
      this.show = false;
    }, this.duration);
  }

  componentWillUpdate() {
    clearTimeout(this.timer);
  }

  render() {
    if (this.show) {
      this.showToast();
    }

    return (
      <div class={`toast ${this.variant} ${this.size} ${this.animation} ${this.show ? 'show' : ''} ${this.position}`}>
        <div class="toast-body">
          {this.message}
        </div>
        <button type="button" class="close" data-dismiss="toast" aria-label="Close" onClick={() => this.show = false}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    );
  }
}
