import React from 'react';
import './App.css';
import Posts from './components/Posts'
import Postform from './components/Postform'
//provider is like the glue for react to redux
//provider take the store that sets state
import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
import store from './store'

//dummy data on next line
// const store = createStore(() => [], {}, applyMiddleware())

function App() {
  return (
    //store holds the whole state tree of your applcation.
    //The only way to change the sate inside it is to dispatch an action on it
    //Store is not a class. It's just and object with a few methods on it.
    //to create it, pass your root reducing function to createStore
    //createStore take in 3 things, root reducer, [preloadedState], [enhancer]
    <Provider store={store} >
    <div className="App">
      <Postform />
      <hr/>
     <Posts />
    </div>
    </Provider>
  );
}

export default App;
