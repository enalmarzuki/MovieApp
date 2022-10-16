import React from 'react';
import {View} from 'react-native';

interface IGapProps {
  height?: string | number;
  width?: string | number;
}

const Gap: React.FC<IGapProps> = ({height, width}) => {
  return <View style={{height: height, width: width}} />;
};

export default Gap;
