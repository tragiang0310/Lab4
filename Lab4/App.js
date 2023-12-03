import 'react-native-gesture-handler';
import React from 'react';
import Contacts from './src/Contacts';
import Store from './src/Store';
import {Provider} from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ProfileContact from './src/ProfileContact';
import Favorites from './src/Favorites';

const Stack = createStackNavigator();

function ContactsScreens() {
	return (
		<Stack.Navigator
			initialRouteName="Contacts"
			screenOptions={
				{
					headerShown: true
				}
			}
		>
			<Stack.Screen 
				name='Contacts'
				component={Contacts}
				options={{title: "Contacts"}}
			/>
			<Stack.Screen 
				name='ProfileContact'
				component={ProfileContact}
				options={{title: "Profile Contact"}}
			/>
		</Stack.Navigator>
	)
}

function FavoriteScreens() {
	return (
		<Stack.Navigator
			initialRouteName="Favorites"
			screenOptions={
				{
					headerShown: true
				}
			}
		>
			<Stack.Screen 
				name='Favorites'
				component={Favorites}
				options={{title: "Favorites"}}
			/>
			<Stack.Screen 
				name='ProfileContact'
				component={ProfileContact}
				options={{title: "Profile Contact"}}
			/>
		</Stack.Navigator>
	)
}

const Tab = createMaterialBottomTabNavigator();
const TabNavigator = () => {
	return (
		<Tab.Navigator
			initialRouteName='ContactsScreens'
			barStyle={{backgroundColor: "blue"}}
			labeled={false}
			activeTintColor={"#d3d3d3"}
			inactiveColor={"#a9a9a9"}
		>
			<Tab.Screen 
				name='ContactsScreens'
				component={ContactsScreens}
				options={{tabBarIcon: 'format-list-bulleted'}}
			/>
			<Tab.Screen 
				name='FavoriteScreens'
				component={FavoriteScreens}
				options={{tabBarIcon: 'star-check'}}
			/>
		</Tab.Navigator>
	)
}
const App = () => {
	return (
		<Provider store={Store}>
			<NavigationContainer>
				<TabNavigator />
			</NavigationContainer>
		</Provider>
	);
}

export default App;