import { Component, h, Prop, Element, Watch, Host, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'prm-drawer',
  styleUrl: 'drawer.scss',
  shadow: true,
})
export class PrmDrawer {
  @Element() el: HTMLElement;

  @Prop({ mutable: true }) toggle: boolean = false;
  @Prop({ reflect: true }) overlay: boolean = true;
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) animation: 'fade' | 'scale' | 'slide-top' | 'slide-bottom' | 'slide-left' | 'slide-right' = 'fade';
  @Event({eventName:'close'}) onclose: EventEmitter<void>;

  private drawer: HTMLElement;
  private overlayElement: HTMLElement;

  removeOpenClassTimeOutId:any

  @Watch('toggle')
  toggleChanged() {
    this.updateDrawer();
  }

  componentWillLoad() {
    this.updateDrawer();
  }

  disconnectedCallback() {
    clearTimeout(this.removeOpenClassTimeOutId)
  }

  updateDrawer() {
    if (this.drawer) {
      if (this.toggle) {
        this.drawer.classList.remove('close');
        this.drawer.classList.add('open');
        if (this.overlay) {
          document.body.classList.add('drawer-overlay');
          this.createOverlay();
        } else {
          document.body.classList.remove('drawer-overlay');
          this.removeOverlay();
        }
      } else {
        this.drawer.classList.add('close');
        this.removeOpenClassTimeOutId  = setTimeout(() => {
          this.drawer.classList.remove('open');
        }, 300);
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


  closeDrawer() {
    this.toggle = false;
    this.onclose.emit();
  }

  render() {
    return (
      <Host>
        <div
          class={`drawer ${this.variant} ${this.animation} ${this.overlay ? 'overlay' : ''}`}
          ref={(el) => (this.drawer = el)}>
          <div class="drawer-content">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}