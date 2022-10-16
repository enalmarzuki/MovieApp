import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Divider from '../Divider';
jest.useFakeTimers();

describe('should render Divider', () => {
  it('should render correctly', () => {
    const DividerSnap = renderer.create(<Divider />).toJSON();
    expect(DividerSnap).toMatchSnapshot();
  });
});
