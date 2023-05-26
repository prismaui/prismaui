import { Component,h } from '@stencil/core';

@Component({
    tag: 'prm-button-group',
    styleUrl: 'button-group.scss',
    shadow: true,
})
export class ButtonGroup {
    render() {
        return (
            <div class="button-group">
              <slot></slot>
            </div>
          );
      
    }
}