import {StatusBar} from 'react-native';
import appColors from '../utils/appColors';
import {useSelector} from 'react-redux';

const AppStatusBar = ({
  isbg = true,
  backgroundColor = appColors.primaryColor,
  isDark = false,
}) => {
  const isarkMode = useSelector(state => state.auth.isDarkMode);
  return (
    <StatusBar
      backgroundColor={
        isarkMode ? appColors.Black_color : appColors.primaryColor
      }
      barStyle={isDark ? 'dark-content' : 'light-content'}
    />
  );
};

export default AppStatusBar;
