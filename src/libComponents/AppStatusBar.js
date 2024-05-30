import {StatusBar} from 'react-native';
import appColors from '../utils/appColors';

const AppStatusBar = ({
  isbg=true,
  backgroundColor =isbg? appColors.primaryColor:appColors.white,
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
