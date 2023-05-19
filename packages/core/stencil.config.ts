import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
export const config: Config = {
  namespace: 'Prismaui',
  globalStyle:'src/global/global.scss',
  plugins: [
    sass({ injectGlobalPaths: ['src/global/global.scss'] })
  ],
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    vueOutputTarget({
      componentCorePackage: '@prismaui/core',
      proxiesFile: '../vue/lib/components.ts',
    }),
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
