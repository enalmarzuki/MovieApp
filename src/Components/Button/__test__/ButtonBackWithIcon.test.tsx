import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import ButtonBackWithIcon from '../ButtonBackWithIcon';
jest.useFakeTimers();

jest.mock('@react-navigation/native', () => {
  return {
    useNavigation: () => ({
      navigate: jest.fn(),
      dispatch: jest.fn(),
    }),
    useRoute: () => ({}),
  };
});

describe('should render ButtonBackWithIcon', () => {
  it('should render correctly', () => {
    const BtnBackSnap = renderer.create(<ButtonBackWithIcon />).toJSON();
    expect(BtnBackSnap).toMatchSnapshot();
  });

  it('ButtonBackWithIcon must have icon arrow', () => {
    const {getByTestId} = render(<ButtonBackWithIcon />);
    expect(getByTestId('btn-back-icon')).toBeTruthy();
  });
});
