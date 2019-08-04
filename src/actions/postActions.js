//importing our action types
import { FETCH_POSTS, NEW_POSTS } from './types'

//each action create is a function we need to export

export function fetchPosts() {
    //dispatch comes from thunk, think of it as a promise with a resolver res.
    return function(dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        //mapping the res from the promise and mapping it to .json
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))
    }
}