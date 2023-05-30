import { Component, h, Prop, Event, EventEmitter, Host, Listen, Element } from '@stencil/core';

@Component({
  tag: 'prm-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) round: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'none';

  @Event() onclick: EventEmitter<MouseEvent>;

  @Listen('click', { target: 'body', capture: true })
  handleClick(event: MouseEvent) {
    const path = event.composedPath && event.composedPath();
    if (path && path.includes(this.el)) {
      this.onclick.emit(event);
    }
  }

  render() {
    return (
      <Host>
        <div class={`button-group round-${this.round}`}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
