import { Plugin } from 'vue';
import { applyPolyfills, defineCustomElements } from '@prismaui/core/loader';

export const ComponentLibrary: Plugin = {
  async install() {
    applyPolyfills().then(() => {
      defineCustomElements();
    });
  },
};