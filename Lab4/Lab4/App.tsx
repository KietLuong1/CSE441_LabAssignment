import { createStackNavigator } from '@react-navigation/stack'
import Contacts from './src/Contact';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Provider } from 'react-redux';
import Store from './src/Store';
import { NavigationContainer } from '@react-navigation/native';
import Favorites from './src/Favorites';
import ProfileContact from './src/ProfileContact';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View } from 'react-native';
import { Text } from 'react-native-paper';


const Stack = createStackNavigator();

function ContactsScreens() {
  return (
    <Stack.Navigator
      initialRouteName='Contacts'
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen
        name='Contacts'
        component={Contacts}
        options={{ title: 'Contacts', }}
      />

      <Stack.Screen
        name='ProfileContact'
        component={ProfileContact}
        options={{ title: 'ProfileContact' }}
      />
    </Stack.Navigator>
  )
}

function FavoriteScreens() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Favorite'
        component={Favorites}
        options={
          { title: 'Favorite' }
        }
      />
      <Stack.Screen
        name='ProfileContact'
        component={ProfileContact}
        options={{ title: 'Profile Contact' }}
      />
    </Stack.Navigator>
  )
}

// using tab navigation
const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='ContactsScreens'
      barStyle={{ backgroundColor: 'blue' }}
      labeled={false}
      activeColor={"grey"}
      inactiveColor={'greyDark'}
    >
      <Tab.Screen
        name='ContactsScreens'
        component={ContactsScreens}
        options={
          {
            tabBarIcon: 'format-list-bulleted-square',
          }
        }
      />

      <Tab.Screen
        name='Favorites'
        component={FavoriteScreens}
        options={
          {
            tabBarIcon: 'star-check',
          }
        }
      />

    </Tab.Navigator>
  )
}

// using drawer navigation
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName='ContactsScreens'>
      <Drawer.Screen name='ContactsScreens' component={ContactsScreens} />
      <Drawer.Screen name='Favorites' component={FavoriteScreens} />
    </Drawer.Navigator>
  )
}

//Using redux toolkit to store the state of the application
// const App = () => {
//   return (
//     <Provider store={Store}>
//       <NavigationContainer>
//         <TabNavigator />
//       </NavigationContainer>
//     </Provider>
//   )
// }

//using async storage to store the data of the application
const App = () => {
  <NavigationContainer>
    <View>
      <Text>My Contacts</Text>
    </View>
    <DrawerNavigator />
  </NavigationContainer>
}

export default App;