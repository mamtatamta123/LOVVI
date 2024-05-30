import { InteractionManager } from "react-native";
import IdentityGender from "../screens/authScreens/authOtherScreens/IdentityGender";
import InterestedGender from "../screens/authScreens/authOtherScreens/InterestedGender";
import CardScreen from "../screens/authScreens/authOtherScreens/CardScreen";
import DistanceRangeScreen from "../screens/authScreens/authOtherScreens/DistanceRangeScreen";
import SchoolScreen from "../screens/authScreens/authOtherScreens/SchoolScreen";
import SelectInterest from "../screens/authScreens/authOtherScreens/SelectInterest";
import UploadPhotos from "../screens/authScreens/PhotosScreens/UploadPhotos";




export const routes = {
  //AUTHSCREENS====================================
  Splash_Screen: 'SplashScreen',
  Login_Screen: 'LoginScreen',
  Signup_Screen: 'SignupScreen',
  Forgot_Password_Screen: 'ForgotPasswordScreen',
  Otp_Verification_Screen: 'OtpVerificationScreen',
  Welcome_Screen: 'WelcomeScreen',
Password_Screen:'PasswordScreen',
GetNumber_Screen:'GetNumberScreen',
Email_Verification:'EmailVerification',
House_Rules:'HouseRules',
Name_Screen:"NameScreen",
DatePickr_Screen:'DatePickrScreen',
Gender_Screen:'GenderScreen',
Identity_Gender:'IdentityGender',
Interested_Gender:'InterestedGender',
Card_Screen:"CardScreen",

Distance_Range_Screen:'DistanceRangeScreen',
School_Screen:"SchoolScreen",
Select_Interest:'SelectInterest',

// Photos Screen==================================
Upload_Photos:"UploadPhotos"

};
