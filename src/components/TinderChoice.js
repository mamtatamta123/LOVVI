import {Text, View} from 'react-native';
import React from 'react';
import appColors from '../utils/appColors';

const TinderChoice = ({type}) => {
  const text = type === 'Like' ? 'Like' : 'Nope';
  const textColor = type === 'Like' ? '#01FF84' : '#F6006B';

  return (
    <View
      style={{
        borderWidth: 4,
        borderColor: textColor,
        padding: 10,
        borderRadius: 5,
      }}>
      <Text style={{color: textColor, fontWeight: 'bold', fontSize: 20}}>
        {text}
      </Text>
    </View>
  );
};

export default TinderChoice;
