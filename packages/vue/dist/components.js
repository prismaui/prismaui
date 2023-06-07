import { defineContainer } from './vue-component-lib/utils';
export const PrmButton = defineContainer('prm-button', undefined, [
    'variant',
    'size',
    'round',
    'disabled',
    'customclass',
    'loading',
    'outline',
    'name',
    'onclick'
]);
export const PrmButtonGroup = defineContainer('prm-button-group', undefined, [
    'round',
    'onclick'
]);
export const PrmDrawer = defineContainer('prm-drawer', undefined, [
    'toggle',
    'variant',
    'animation',
    'close'
]);
export const PrmPopup = defineContainer('prm-popup', undefined, [
    'size',
    'isOpen',
    'animation'
]);
export const PrmToast = defineContainer('prm-toast', undefined, [
    'message',
    'variant',
    'size',
    'position',
    'timer',
    'animation',
    'closable',
    'show',
    'close'
]);
//# sourceMappingURL=components.js.map