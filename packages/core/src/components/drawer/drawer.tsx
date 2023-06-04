import { Component, h, Prop, Element, Watch, Host, Event, EventEmitter } from '@stencil/core';

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

  @Event({eventName:'close'}) onclose: EventEmitter<void>;

  private drawer: HTMLElement;
  private overlayElement: HTMLElement;

  @Watch('toggle')
  toggleChanged() {
    this.updateDrawer();
  }

  componentWillLoad() {
    this.updateDrawer();

    if (this.touchFriendly) {
      this.el.addEventListener('touchstart', this.handleTouchStart, { passive: false });
      this.el.addEventListener('touchmove', this.handleTouchMove, { passive: false });
      this.el.addEventListener('touchend', this.handleTouchEnd, { passive: false });
    }
  }

  disconnectedCallback() {
    if (this.touchFriendly) {
      this.el.removeEventListener('touchstart', this.handleTouchStart);
      this.el.removeEventListener('touchmove', this.handleTouchMove);
      this.el.removeEventListener('touchend', this.handleTouchEnd);
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
    this.closeDrawer();
  };

  handleTouchStart = (event: TouchEvent) => {
    if (!this.drawer.contains(event.target as Node)) {
      this.closeDrawer();
    }
  };

  handleTouchMove = (event: TouchEvent) => {
    event.preventDefault();
  };

  handleTouchEnd = (event: TouchEvent) => {
    event.preventDefault();
  };

  closeDrawer() {
    this.toggle = false;
    this.onclose.emit();
  }

  render() {
    return (
      <Host>
        <div
          class={`drawer ${this.position} ${this.color} ${this.animation} ${this.overlay ? 'overlay' : ''}`}
          ref={(el) => (this.drawer = el)}
          onTouchStart={this.handleTouchStart}
          onTouchMove={this.handleTouchMove}
          onTouchEnd={this.handleTouchEnd}
        >
          <div class="drawer-content">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
