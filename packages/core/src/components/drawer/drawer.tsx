import { Component, h, Prop, Element, Watch, Host, Event, EventEmitter } from '@stencil/core';
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

  @Event() prmDrawerClose: EventEmitter<void>;

  private drawer: HTMLElement;
  private overlayElement: HTMLElement;
  private hammer: HammerManager;

  @Watch('toggle')
  toggleChanged() {
    this.updateDrawer();
  }

  componentWillLoad() {
    this.updateDrawer();

    if (this.touchFriendly) {
      this.hammer = new Hammer(this.el);
      this.hammer.on('swipe', (ev) => {
        if (
          ev.direction === Hammer.DIRECTION_LEFT ||
          ev.direction === Hammer.DIRECTION_RIGHT ||
          ev.direction === Hammer.DIRECTION_UP ||
          ev.direction === Hammer.DIRECTION_DOWN
        ) {
          this.closeDrawer();
        }
      });
    }
  }

  disconnectedCallback() {
    if (this.hammer) {
      this.hammer.destroy();
    }
  }

  updateDrawer() {
    if (this.drawer) {
      if (this.toggle) {
        this.drawer.classList.add('open');
        if (this.overlay) {
          document.body.classList.add('drawer-overlay');
          this.createOverlay();
        } else {
          document.body.classList.remove('drawer-overlay');
          this.removeOverlay();
        }
      } else {
        this.drawer.classList.remove('open');
        if (this.overlay) {
          document.body.classList.remove('drawer-overlay');
          this.removeOverlay();
        }
      }
    }
  }

  createOverlay() {
    if (!this.overlayElement) {
      this.overlayElement = document.createElement('div');
      this.overlayElement.classList.add('drawer-overlay');
      this.overlayElement.addEventListener('click', this.handleOverlayClick);
      document.body.appendChild(this.overlayElement);
    }
  }

  removeOverlay() {
    if (this.overlayElement) {
      this.overlayElement.removeEventListener('click', this.handleOverlayClick);
      this.overlayElement.parentNode.removeChild(this.overlayElement);
      this.overlayElement = null;
    }
  }

  handleOverlayClick = () => {
    if (this.touchFriendly && this.overlay) {
      this.closeDrawer();
    }
  };

  closeDrawer() {
    this.toggle = false;
    this.prmDrawerClose.emit();
  }

  render() {
    return (
      <Host>
        <div
          class={`drawer ${this.position} ${this.color} ${this.animation} ${this.overlay ? 'overlay' : ''}`}
          ref={(el) => (this.drawer = el)}
        >
          <div class="drawer-content">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
