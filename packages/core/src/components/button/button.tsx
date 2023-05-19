import { Component, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'prm-button',
  styleUrl: 'button.scss',
  shadow: true,
})
export class Button {
  buttonElement: HTMLButtonElement;

  @Prop({ reflect: true }) variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'light' | 'dark' = 'primary';
  @Prop({ reflect: true }) size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  @Prop({ reflect: true }) round: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'md';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) customclass: string = '';
  @Prop({ reflect: true }) ariacontrols: string = '';
  @Prop({ reflect: true }) loading: string = '';
  @Prop({ reflect: true }) outline: boolean = false;
  @Event() onclick: EventEmitter<MouseEvent>;

  handleClick = (ev: MouseEvent) => {
    if (!this.disabled && !this.loading) {
      this.onclick.emit(ev);
    }
  };

  render() {
    const buttonClass = `${this.customclass} button-${this.size} button-round-${this.round}`;
    const isDisabled = this.disabled || !!this.loading;
    const buttonLabel = this.disabled ? 'Disabled Button' : `Button with ${this.variant} variant`;
  
    const buttonProps = {
      class: `${buttonClass} ${this.outline
        ? `button-outline-${isDisabled ? 'disabled' : this.variant}`
        : `button-${isDisabled ? 'disabled' : this.variant}`}`,
      disabled: isDisabled,
      'aria-controls': this.ariacontrols,
      'aria-label': buttonLabel,
      onClick: this.handleClick
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
      <button {...buttonProps}>
        {slotContent}
      </button>
    );
  }
}
