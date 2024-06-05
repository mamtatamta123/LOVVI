import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import AppView from '../../../libComponents/AppView';
import AppStatusBar from '../../../libComponents/AppStatusBar';
import AppHeader from '../../../libComponents/AppHeader';
import AppText from '../../../libComponents/AppText';
import appColors from '../../../utils/appColors';
import AppIcon, {Icon} from '../../../libComponents/AppIcon';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {routes} from '../../../utils/routes';

const AllSettings = ({navigation}) => {
  return (
    <AppView>
      <AppStatusBar isDark={false} isbg={false} />
      <AppHeader isBlack={true} isColor={true} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Account settings</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Phone Number</AppText>
              <View style={styles.rowContent}>
                <Text style={styles.phoneNumber}>+01 00000 00000</Text>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
            <Text style={styles.description}>
              Verify a phone number to help secure your account.
            </Text>
          </View>

          {/* =======================DiscoverSettings====================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Discovery settings</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Location</AppText>
              <View style={styles.rowContent}>
                <Text style={styles.rowTitle}>My current location</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Change your location to see Lovvi members in others cities.
            </Text>
          </View>

          {/* =======================GLOBALSETTING================================= */}
          <View style={styles.section}>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Global</AppText>
              <View style={styles.rowContent}>
                <Text style={styles.rowTitle}>My location</Text>
              </View>
            </View>
            <Text style={styles.description}>
              Going global will allow you to see people nearby and from around
              the world.{' '}
            </Text>
          </View>

          {/* ======================================MAXIMUM DISTANCE============== */}

          <View style={styles.section}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText style={styles.sectionTitle}>Maximum distance</AppText>
              <AppText
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: appColors.IconColor,
                }}>
                50mi.
              </AppText>
            </View>
            <MultiSlider
              values={[0, 1000]}
              onValuesChangeFinish={val => setPriceRange(val)}
            />
            <View style={styles.row}>
              <AppText style={styles.description}>
                Show people further away if i run out of profiles to see
              </AppText>
              <View style={styles.rowContent}>
                <AppText
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: appColors.IconColor,
                  }}>
                  50mi.
                </AppText>
              </View>
            </View>
          </View>

          {/* ======================== ======================================================*/}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Show me</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Women</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </View>

          {/* =========================================================================== */}
          <View style={styles.section}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText style={styles.sectionTitle}>Age range</AppText>
              <AppText
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: appColors.IconColor,
                }}>
                18 - 35
              </AppText>
            </View>
            <MultiSlider
              values={[0, 1000]}
              onValuesChangeFinish={val => setPriceRange(val)}
            />
            <View style={styles.row}>
              <AppText style={styles.description}>
                Show people slightly out of my preferred range if i run out of
                profiles to see
              </AppText>
              <View style={styles.rowContent}>
                <AppText
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: appColors.IconColor,
                  }}>
                  50mi.
                </AppText>
              </View>
            </View>
            <AppText
              style={{
                marginTop: 2,
                color: appColors.IconColor,
                width: '80%',
                fontSize: 14,
              }}>
              Show people slightly out of my preferred range if i run out of
              profiles to see
            </AppText>
          </View>

          {/* ================================================= */}
          <View style={styles.section}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <AppText style={styles.sectionTitle}>Enable Discovery</AppText>
              <AppText
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: appColors.IconColor,
                }}>
                50mi.
              </AppText>
            </View>

            <View style={{}}>
              <AppText style={styles.description}>
                When turned off, your profile will be hidden from the card stack
                and Discovery will be disabled. People you have already liked
                may still see you and match with you.
              </AppText>
            </View>
          </View>

          {/* ======================== ======================================================*/}

          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>
              Control who messages you
            </AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Photo verified chat</AppText>
              <View style={styles.rowContent}>
                <Text style={styles.phoneNumber}>00000</Text>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
            <Text style={styles.description}>
              Photo verified members can enable this to only receive messages
              from other photo
            </Text>
          </View>

          {/* =============================================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Read Receipts</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Send Read Receipts </AppText>
              <View style={styles.rowContent}>
                <Text style={styles.phoneNumber}>00000</Text>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
            <Text style={styles.description}>
              Turning this off will prevent any matches from activating Read
              Receipts in your conversation from this moment forward
            </Text>
          </View>
          {/* ============================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Block contacts</AppText>
          </View>

          {/* ============================================================================== */}
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigation.navigate(routes.Appearance)}>
            <AppText style={styles.sectionTitle}>Appearance</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Dark Mode</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </TouchableOpacity>
          {/* ========================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Data usage</AppText>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate(routes.AutoPlayVideos)}>
              <AppText style={styles.rowTitle}>Autoplay videos</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </TouchableOpacity>
          </View>

          {/* ====================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Web Profile</AppText>
            <TouchableOpacity
              style={styles.row}
              onPress={() => navigation.navigate(routes.UserName)}>
              <AppText style={styles.rowTitle}>Username</AppText>
              <View style={styles.rowContent}>
                <Text style={styles.phoneNumber}>Claim yours</Text>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </TouchableOpacity>
            <Text style={styles.description}>
              Create a username. Share your username. Have people all over the
              world match with you right on Lovvi
            </Text>
          </View>
          {/* ======================================================================== */}
          <TouchableOpacity
            style={styles.section}
            onPress={() => navigation.navigate(routes.QandA_Evants)}>
            <AppText style={styles.sectionTitle}>Q&A events</AppText>
            <AppText style={styles.sectionTitle}>Manage Q&A events</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Settings</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </TouchableOpacity>
          {/* ================================================================ */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Matchmaker</AppText>
            <AppText style={styles.sectionTitle}>Manage Matchmaker</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Settings</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </View>
          {/* ==================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Top Picks</AppText>
            <AppText style={styles.sectionTitle}>Manage Top Picks</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Settings</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </View>
          {/* =============================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Direct Messages</AppText>
            <AppText style={styles.sectionTitle}>
              Manage Direct Messages
            </AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Settings</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </View>
          {/* ================================================================ */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Swipe Surge</AppText>
            <AppText style={styles.sectionTitle}>Manage Swipe Surge</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Settings</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </View>
          {/* =================================================================== */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Active status</AppText>
            <AppText style={styles.sectionTitle}>Manage active status</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Settings</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </View>
          {/* ============================================ */}
          <View style={styles.section}>
            <AppText style={styles.sectionTitle}>Active status</AppText>
            <AppText style={styles.sectionTitle}>Manage active status</AppText>
            <View style={styles.row}>
              <AppText style={styles.rowTitle}>Settings</AppText>
              <View style={styles.rowContent}>
                <AppIcon
                  Type={Icon.Feather}
                  name={'chevron-right'}
                  size={19}
                  color={appColors.BLACK}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </AppView>
  );
};

export default AllSettings;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    paddingVertical: 30,
  },
  section: {
    borderBottomWidth: 1,
    borderBottomColor: appColors.IconColor,
    paddingVertical: 20,
  },
  sectionTitle: {
    color: appColors.BLACK,
    fontWeight: 'bold',
    fontSize: 18,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rowTitle: {
    fontSize: 16,
    color: appColors.BLACK,
    fontWeight: '500',
  },
  rowContent: {
    flexDirection: 'row',
  },
  phoneNumber: {
    marginLeft: 10,
    fontSize: 13,
    color: appColors.BLACK,
    fontWeight: '500',
  },
  description: {
    marginTop: 2,
    color: appColors.IconColor,
    // width: '90%',
  },
});
