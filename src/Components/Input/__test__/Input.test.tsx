import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import Input from '../Input';
jest.useFakeTimers();

jest.mock(
  '../../../../node_modules/react-native/Libraries/Animated/NativeAnimatedHelper',
);

describe('should render Input default', () => {
  it('should render correctly', () => {
    const mockFunction = jest.fn();
    const InputSnap = renderer
      .create(
        <Input
          isRounded
          mode="outlined"
          placeholder="Search..."
          value="mock value"
          onChangeText={mockFunction}
        />,
      )
      .toJSON();

    expect(InputSnap).toMatchSnapshot();
  });

  it('input must have placeholder Search...', () => {
    const mockFunction = jest.fn();
    const {getByPlaceholderText} = render(
      <Input
        isRounded
        mode="outlined"
        placeholder="Search..."
        value="mock value"
        onChangeText={mockFunction}
      />,
    );
    const placeholderText = getByPlaceholderText('Search...');
    expect(placeholderText).toBeTruthy();
  });

  it('should input have value Spiderman', () => {
    const mockFunction = jest.fn();
    const {getByTestId} = render(
      <Input
        isRounded
        mode="outlined"
        placeholder="Search..."
        value="mock value"
        onChangeText={mockFunction}
      />,
    );
    const inputComponent = getByTestId('text-input-outline');
    fireEvent.changeText(inputComponent, 'Spiderman');
    expect(mockFunction).toHaveBeenCalledWith('Spiderman');
  });
});
