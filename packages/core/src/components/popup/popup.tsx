import { Component, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'prm-popup',
  styleUrl: 'popup.scss',
  shadow: true,
})
export class Popup {
  @Prop({ reflect: true }) size: string = 'medium';
  @Prop({ reflect: true }) data: any;
  @Prop({ reflect: true, mutable: true }) isOpen: boolean = false;
  @State() opened: boolean = false;

  componentWillRender() {
    this.opened = this.isOpen;
  }

  @Watch('isOpen')
  handleIsOpenChange(newValue: boolean) {
    this.opened = newValue;
  }

  render() {
    return this.opened && (
      <div class="popup-overlay">
        <div class={`popup-card ${this.size}`}>
          <slot></slot>
          <div class="popup-content">{this.data}</div>
        </div>
      </div>
    );
  }
}
