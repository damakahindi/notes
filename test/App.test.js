import React from 'react';
import App from '../src/components/App.jsx';
import { mount } from 'enzyme';

test('<App/>', () => {
  const wrapper = mount(<App />);
  const p = wrapper.find('div');
  expect(p.text()).toBe('Hello world');
});
