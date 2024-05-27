import {StatusBar} from 'react-native';
import appColors from '../utils/appColors';

const AppStatusBar = ({
  backgroundColor = appColors.primaryColor,
  isDark = false,
}) => {
  return (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={isDark ? 'dark-content' : 'light-content'}
    />
  );
};

export default AppStatusBar;
