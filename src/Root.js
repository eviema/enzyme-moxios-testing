import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';

export default ({ children, initialState = {} }) => { // give initialState an initial value 
                                                    //so that it's backwards compatible, 
                                                    // i.e. now able to work with any use of Root that 
                                                    // doesn't have an initialState passed in

    const store = createStore(reducers, initialState, applyMiddleware(reduxPromise));
    return (
        <Provider store={store}>
            {children} 
        </Provider>
    ); 
}