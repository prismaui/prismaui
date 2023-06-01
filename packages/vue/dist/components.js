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
export const PrmPopup = defineContainer('prm-popup', undefined, [
    'size',
    'isOpen',
    'animation'
]);
//# sourceMappingURL=components.js.map