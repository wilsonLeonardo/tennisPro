import React from 'react';
import { Text } from 'react-native';

export function AeroText(props) {
  return (
    <Text {...props} style={[props.style, { fontFamily: 'Aero' }]} />
  );
}
