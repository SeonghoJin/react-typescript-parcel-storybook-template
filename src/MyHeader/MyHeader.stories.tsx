import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MyHeader } from './MyHeader';

export default {
  title: 'Example/MyHeader',
  component: MyHeader,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof MyHeader>;

const Template: ComponentStory<typeof MyHeader> = (args) => <MyHeader {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
