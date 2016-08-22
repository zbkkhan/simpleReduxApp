import React from 'react'
import { connect } from 'react-redux'
import AutoFillList from '../components/AutoFillList'

const mapStateToProps = (state) => {
	
	return{
		songs: state.autofillResult
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		onClick: () => {return}
	}
}

const AutoFillLogic= connect(mapStateToProps, mapDispatchToProps)(AutoFillList)
export default AutoFillLogic