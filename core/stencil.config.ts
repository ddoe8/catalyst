import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'catalyst',
  plugins: [sass()],
  globalStyle: 'src/styles/index.scss',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'dist-custom-elements'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    },
    angularOutputTarget({
      componentCorePackage: '@coyoapp/catalyst',
      directivesProxyFile: '../angular/projects/catalyst/src/lib/directives/proxies.ts'
    })
  ]
};
