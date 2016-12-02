import { ACTION_HOMEPAGE_LOADING, ACTION_SEARCH } from '../actions/index';

export default function (state = null, action) {
  // console.log(action);
  switch (action.type) {
    case ACTION_HOMEPAGE_LOADING:
        return action.payload.data.items;
  }
  return state;
}
