import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'prm-toast',
  styleUrl: 'toast.scss',
  shadow: true,
})
export class PrmToast {
  @Prop() message: string;
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop() size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop() position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' = 'top-right';
  @Prop() timer: number = 3000;
  @Prop() animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';

  @State() visible: boolean = true;

  componentWillLoad() {
    setTimeout(() => {
      this.visible = false;
    }, this.timer);
  }

  render() {
    return (
      <div class={`toast ${this.variant} ${this.size} ${this.position} ${this.animation} ${this.visible ? 'visible' : 'hidden'}`}>
        {this.message}
      </div>
    );
  }
}
