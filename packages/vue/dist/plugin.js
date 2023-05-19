import { applyPolyfills, defineCustomElements } from '@prismaui/core/loader';
export const ComponentLibrary = {
    async install() {
        applyPolyfills().then(() => {
            defineCustomElements();
        });
    },
};
//# sourceMappingURL=plugin.js.map