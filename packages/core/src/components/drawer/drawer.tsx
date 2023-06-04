import { Component, h, Prop, Element, Watch } from '@stencil/core';
import Hammer from 'hammerjs';

@Component({
  tag: 'prm-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class PrmDrawer {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) toggle: boolean = false;
  @Prop({ reflect: true }) position: 'top' | 'right' | 'bottom' | 'left' = 'left';
  @Prop({ reflect: true }) touchFriendly: boolean = false;
  @Prop({ reflect: true }) overlay: boolean = true;
  @Prop({ reflect: true }) color: string = 'primary';
  @Prop({ reflect: true }) animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';

  @Watch('toggle')
  toggleChanged() {
    this.updateDrawer();
  }

  componentWillLoad() {
    this.updateDrawer();

    if (this.touchFriendly) {
      const hammer = new Hammer(this.el);
      hammer.on('swipe', (ev) => {
        if (ev.direction === Hammer.DIRECTION_LEFT || ev.direction === Hammer.DIRECTION_RIGHT || ev.direction === Hammer.DIRECTION_UP || ev.direction === Hammer.DIRECTION_DOWN) {
          this.toggle = false;
        }
      });
    }
  }

  updateDrawer() {
    const drawer = this.el.shadowRoot.querySelector('.drawer');
    if (this.toggle) {
      drawer.classList.add('open');
    } else {
      drawer.classList.remove('open');
    }
  }

  render() {
    return (
      <div class={`drawer ${this.position} ${this.color} ${this.animation} ${this.overlay ? 'overlay' : ''}`}>
        <div class="drawer-content" onClick={() => this.touchFriendly && this.overlay && (this.toggle = false)}>
          <slot />
        </div>
      </div>
    );
  }
}
