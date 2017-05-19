import { SELECT_SUBREDDIT } from '../actions/index';

function selectedSubreddit(state = 'reactjs', action) {
    debugger;
  switch (action.type) {
  case SELECT_SUBREDDIT:
    return action.subreddit
  default:
    return state
  }
}

export default selectedSubreddit;