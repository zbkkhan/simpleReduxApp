import { combineReducers } from 'redux'
import {SEARCH_TYPING , SEARCH_SUBMIT} from '../actions'

function search(state = {} , action) {
	
  switch (action.type) {
    case SEARCH_TYPING:
      return Object.assign({}, state, {
            songTitle: action.autofillTitle,
		  	songLink: action.autofillLink
          })
    default:
      return state
  }
}

export default search
