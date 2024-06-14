import notifee, {AndroidImportance, AndroidStyle} from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const NotificationOnScreen = async remoteMessage => {
  const channelId = await notifee.createChannel({
    id: 'default 4',
    name: 'Default Channel 4',
    importance: AndroidImportance.HIGH,
  });
  await notifee.displayNotification({
    title: remoteMessage.data.title,
    body: remoteMessage.data.body,
    android: {
      channelId,
    },
  });
};

export async function notificationListeners() {
  //on display====
  const unsubscribe = messaging().onMessage(async remoteMessage => {
    console.log('A new FCM message arrived!=============>', remoteMessage);
    NotificationOnScreen(remoteMessage);
  });

  //=======on backgraoung=========
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    NotificationOnScreen(remoteMessage);
  });
  return unsubscribe;
}

export default NotificationOndisplay = {
  NotificationOnScreen,
};
