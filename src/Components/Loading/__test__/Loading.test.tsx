import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import Loading from '../Loading';
jest.useFakeTimers();

jest.mock(
  '../../../../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper',
);

describe('should render ButtonBackWithIcon', () => {
  it('should render correctly', () => {
    const {getByTestId} = render(<Loading />);
    expect(getByTestId('data-loading')).toBeTruthy();
  });
});
