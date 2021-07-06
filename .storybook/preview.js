import React from 'react';
import { addDecorator } from '@storybook/react';
import Container from '../src/component/core/Container'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  options: {
    storySort: {
      order: ['Landing', 'Button', 'Table', 'Pagination'],
    },
  },
}

addDecorator(story => <Container>{story()}</Container>)