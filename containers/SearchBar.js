import React from 'react'
import { connect } from 'react-redux'
import {autofillSearch, resultsSearch } from '../actions'
import store from '../index.js'
let SearchBar = ({ dispatch }) => {
  let input
  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(autofillSearch(input.value))
        input.value = ''
      }}>
       Search
      </button>
    </div>
  )
}
SearchBar = connect()(SearchBar)

export default SearchBar



//import React, { PropTypes, Components } from 'react'
//import { connect } from 'react-redux'
//import {autofillSearch, resultsSearch} from '../actions'
//class SearchBar extends Components = {
//	
//	render:function(){
//		const { onSubmit, onChange } = this.props
//		let input
//		return (
//		 <div>
//      <form onSubmit={e => {
//        e.preventDefault()
//        if (!input.value.trim()) {
//          return
//        }
//        dispatch(addTodo(input.value))
//        input.value = ''
//      }}>
//        <input ref={node => {
//          input = node
//        }} />
//        <button type="submit">
//          Add Todo
//        </button>
//      </form>
//    </div>)
//	}
//	
//}
//
//
//SearchBar = connect()(SearchBar)
//export default SearchBar