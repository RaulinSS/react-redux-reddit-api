import { combineReducers } from 'redux'
import  postsBySubreddit  from './reducer_posts';
import  selectedSubreddit  from './reducer_selectSubReddit';

console.log("postsBySubreddit", postsBySubreddit);
console.log("selectedSubreddit", selectedSubreddit);

const rootReducer = combineReducers({
  postsBySubreddit: postsBySubreddit,
  selectedSubreddit: selectedSubreddit
});

export default rootReducer