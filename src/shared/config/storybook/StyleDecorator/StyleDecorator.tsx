import type { Decorator } from '@storybook/react';
import 'app/styles/index.scss';

export const StyleDecorator: Decorator = (Story) => (
  <div className='app light'>
    <Story />
  </div>
);