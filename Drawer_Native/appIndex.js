import { DrawerNavigator, DrawerItems } from 'react-navigation';
import MyHomeScreen from  './MyHomeScreen';
import MyNotificationsScreen from './MyNotificationsScreen';

const App = DrawerNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
}, {
      contentComponent: (props) => (
        <View>
             <Text>Custom Header</Text>
             <DrawerItems {...props} />
             <Text>Custom Footer</Text>
        </View>
      )
});