import { Component, Prop, h, Event, EventEmitter, Host } from '@stencil/core';

@Component({
  tag: 'prm-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  buttonElement: HTMLButtonElement;

  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop({ reflect: true }) round: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'none';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) customclass: string = '';
  @Prop({ reflect: true }) loading: string = '';
  @Prop({ reflect: true }) outline: boolean = false;
  @Prop({ reflect: true }) name: string = '';
  @Event() onclick: EventEmitter<MouseEvent>;

  handleClick = (event: MouseEvent) => {
    this.onclick.emit(event);
  };

  render() {
    const buttonClass = `${this.customclass} button-${this.size} button-round-${this.round}`;
    const isDisabled = this.disabled;
    const buttonLabel = this.disabled ? 'Disabled Button' : `Button with ${this.variant} variant`;

    const buttonProps = {
      class: `${buttonClass} ${this.outline ? `button-outline-${isDisabled ? 'disabled' : this.variant}` : `button-${isDisabled ? 'disabled' : this.variant}`}`,
      disabled: isDisabled,
      'aria-label': buttonLabel,
    };

    const slotContent = this.loading ? (
      <div class="slot-container">
        <span class="spinner"></span>
        <span>{this.loading}</span>
      </div>
    ) : (
      <div class="slot-container">
        <slot></slot>
      </div>
    );

    return (
      <Host onClick={this.handleClick}>
        <button {...buttonProps}>
          {slotContent}
        </button>
      </Host>
    );
  }
}
