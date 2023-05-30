import { Component, h, Prop, Event, EventEmitter,Host } from '@stencil/core';

@Component({
  tag: 'prm-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  @Prop({ reflect: true }) round: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'none';

  @Event() onclick: EventEmitter<MouseEvent>;

  handleClick = (event: MouseEvent) => {
    this.onclick.emit(event);
  };

  render() {
    return (
      <Host onClick={this.handleClick}>
      <div class={`button-group round-${this.round}`}>
        <slot></slot>
      </div>
      </Host>
    );
  }
}
