import { combineReducers } from 'redux';
import VideoReducer from './reducer-videos';

const rootReducer = combineReducers({
  videos: VideoReducer
});

export default rootReducer;
