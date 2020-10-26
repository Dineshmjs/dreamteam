import React from 'react';
import Main from './router'
import store from './redux/Store'
import {Provider} from 'react-redux'

function App() {
  return (
    
    <Provider store={store}>
      <Main />
    </Provider>    
  );
}

export default App;
