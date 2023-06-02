import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'prm-toast',
  styleUrl: 'prm-toast.scss',
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

  private static visibleToasts: number = 0;
  private toastIndex: number;

  componentWillLoad() {
    this.toastIndex = PrmToast.visibleToasts;
    PrmToast.visibleToasts++;

    setTimeout(() => {
      this.visible = false;
      PrmToast.visibleToasts--;
    }, this.timer);
  }

  render() {
    const marginBottom = `${(this.toastIndex + 1) * 10}px`;

    return (
      <div
        class={`toast ${this.variant} ${this.size} ${this.position} ${this.animation} ${this.visible ? 'visible' : 'hidden'}`}
        style={{ 'margin-bottom': marginBottom }}
      >
        {this.message}
      </div>
    );
  }
}
