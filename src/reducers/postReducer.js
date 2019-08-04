//going to evaluate any actions that are commited, such as fetching our post and creating our post.


//going to create actions types which are basiclly const variables
//importing our action types
import {FETCH_PORTS, NEW_POSTS} from '../actions/types'

const initialState = {
    //items is going to represent our posts from our action.
    items: [],
    //item represents our single post that we add when we get the response back
    item: {}
}

//evaluates the type that we are dealing with
export default function(state: initialState, action){
    //action has to inclue a type, which is what we are evaluating with the function
    switch(action.type) {
        //always need a defalut that returns current state.
        default:
            return state;
    }
}

