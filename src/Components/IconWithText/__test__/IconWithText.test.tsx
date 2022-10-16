import {ICArrowLeft} from '../../../Assets/icons';
import {render} from '@testing-library/react-native';
import React from 'react';
import 'react-native';
import renderer from 'react-test-renderer';
import IconWithText from '../IconWithText';
jest.useFakeTimers();

describe('should render ButtonBackWithIcon', () => {
  it('should render correctly', () => {
    const IconWithTextSnap = renderer
      .create(<IconWithText text="mock text" icon={ICArrowLeft} />)
      .toJSON();
    expect(IconWithTextSnap).toMatchSnapshot();
  });

  it('IconWithText must have text Synopsis', () => {
    const {getByTestId} = render(
      <IconWithText text="Synopsis" icon={ICArrowLeft} />,
    );

    const textContent = getByTestId('data-text').children[0];

    expect(textContent).toEqual('Synopsis');
    expect(getByTestId('data-icon')).toBeTruthy();
  });
});
