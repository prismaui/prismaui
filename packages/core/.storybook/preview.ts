import type { Preview } from '@storybook/html';
import {defineCustomElements} from '../loader';
import '../src/global/variables.scss';

defineCustomElements();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
