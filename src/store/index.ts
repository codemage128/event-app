import {configureStore} from '@reduxjs/toolkit'
import {useDispatch as useReduxDispatch, useSelector as useReduxSelector} from 'react-redux';

import rootReducer from './rootReducer'

export const store = configureStore({
    reducer: rootReducer
})

export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

/**
 * Automatically applies dispatch to dictionary of action creators so you don't need to wrap with dispatch yourself.
 *
 * @returns
 * @param actionCreator
 */
export const useDispatchedActions = (actionCreator: any) => {
    const dispatch = useDispatch();
    return (...args: any[]) => {
        const action = actionCreator(...args);
        dispatch(action);
    };
};

export default store;
