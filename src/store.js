import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

//store holds the whole state tree of your applcation.
    //The only way to change the sate inside it is to dispatch an action on it
    //Store is not a class. It's just and object with a few methods on it.
    //to create it, pass your root reducing function to createStore
    //createStore take in 3 things, root reducer, [preloadedState], [enhancer]

//setting initialState
const initialState = {}

//array of middleware
const middleware = [thunk]
//createStore take in 3 things, root reducer, [preloadedState], [enhancer]
//using spread operator on middleware to make a copy and assign it to applyMiddleware
const store = createStore(
    rootReducer, 
    initialState, 
    applyMiddleware(...middleware)
    )

export default store;

