import { Component, h, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'prm-button-group',
  styleUrl: 'button-group.scss',
  shadow: true,
})
export class ButtonGroup {
  @Prop({ reflect: true }) round: 'none' | 'sm' | 'md' | 'lg' | 'xl' | 'full' = 'none';

  @Event() onclick: EventEmitter<MouseEvent>;

  @Listen('click', { target: 'window' })
  handleChildButtonClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    console.log(target.tagName);
    
    if (target.tagName === 'PRM-BUTTON') {
      console.log(target);
      const buttonName = target.getAttribute('name');
      console.log(buttonName);
      
      if (buttonName) {
        this.onclick.emit(event);
      }
    }
  }

  render() {
    return (
      <div class={`button-group round-${this.round}`}>
        <slot></slot>
      </div>
    );
  }
}
