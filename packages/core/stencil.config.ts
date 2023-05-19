import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';
import { reactOutputTarget } from '@stencil/react-output-target';
import { angularOutputTarget } from '@stencil/angular-output-target';

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
    reactOutputTarget({
      componentCorePackage: '@prismaui/core',
      proxiesFile: '../react/lib/components/generated/index.ts',
    }),
    angularOutputTarget({
      componentCorePackage: '@prismaui/core',
      directivesProxyFile: '../angular/projects/prismaui/src/lib/generated/components.ts',
      directivesArrayFile: '../angular/projects/prismaui/src/lib/generated/index.ts',
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
