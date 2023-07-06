import { combineReducers } from '@reduxjs/toolkit';
import { reducer as app } from './slices/app';

const rootReducer = combineReducers({
    app,
});
export default rootReducer;
