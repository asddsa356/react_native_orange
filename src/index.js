import React, {Component} from 'react';    
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux'
import createStore from "./store/createstore";
import SideBar from "./components/sidebar";
import HomeScreen from "./screens/homescreen";
import ResultScreen from "./screens/resultscreen";
const Drawer = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },
    Result: { screen: ResultScreen },
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);
const AppContainer = createAppContainer(AppNavigator)

const store = createStore()
 class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <AppContainer/>
        </Provider>
    );
  }
}
export default App;