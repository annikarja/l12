import React from 'react';
import './i18n';

import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import screens from './screens/_index';

// A very simple reducer
function count(state, action) {
  if (typeof state === 'undefined') return 0;
  switch (action.type) {
    case 'INCREMENT':
      return ++state;
    case 'DECREMENT':
      return --state;
    default:
      return state;
  }
}

function lang(state, action) {
  if (typeof state === 'undefined') return 0;
  switch (action.type) {
    case 'FI':
      return 'FI';
    case 'EN':
      return 'EN';
    default:
      return state;
  }
}

// A very simple store { count, lang }
let store = createStore(combineReducers({
  count,
  lang
}));

const Stack = createNativeStackNavigator();

const App = () => {
  let stateContainers = screens.map((s) => {
    let screen = { 
      ...s, 
      stateComponent: connect((state) => ({ count: state.count, lang: state.lang }))(s.component)
    }; // key, component, stateComponent
    return screen;
  })

  return (<Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screens[0].key}>
        {/*screens.map((s) => <Stack.Screen name={s.key} key={s.key} component={s.component} />)*/}
        {stateContainers.map((s) => <Stack.Screen name={s.key} key={s.key} component={s.stateComponent} />)}
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>);
};

export default App;
