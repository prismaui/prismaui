/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@prismaui/core';


@ProxyCmp({
  inputs: ['customclass', 'disabled', 'loading', 'name', 'outline', 'round', 'size', 'variant']
})
@Component({
  selector: 'prm-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['customclass', 'disabled', 'loading', 'name', 'outline', 'round', 'size', 'variant'],
})
export class PrmButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['onclick']);
  }
}


export declare interface PrmButton extends Components.PrmButton {

  onclick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['round']
})
@Component({
  selector: 'prm-button-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['round'],
})
export class PrmButtonGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['onclick']);
  }
}


export declare interface PrmButtonGroup extends Components.PrmButtonGroup {

  onclick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['animation', 'toggle', 'variant']
})
@Component({
  selector: 'prm-drawer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animation', 'toggle', 'variant'],
})
export class PrmDrawer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


export declare interface PrmDrawer extends Components.PrmDrawer {

  close: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['animation', 'isOpen', 'size']
})
@Component({
  selector: 'prm-popup',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animation', 'isOpen', 'size'],
})
export class PrmPopup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface PrmPopup extends Components.PrmPopup {}


@ProxyCmp({
  inputs: ['animation', 'closable', 'message', 'position', 'show', 'size', 'timer', 'variant']
})
@Component({
  selector: 'prm-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animation', 'closable', 'message', 'position', 'show', 'size', 'timer', 'variant'],
})
export class PrmToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['close']);
  }
}


export declare interface PrmToast extends Components.PrmToast {

  close: EventEmitter<CustomEvent<void>>;
}


