import React, { PropTypes } from 'react'
import store from '../index.js'


const AutoFillList = ({songTitle, songLink, onClick}) => (
	
	<a href={songLink}>
  	<li onClick={onClick}>{songTitle}</li>
  	</a>
)

AutoFillList.propTypes = {
	onClick: PropTypes.func.isRequired,
  	songTitle: PropTypes.string.isRequired,
	songLink: PropTypes.string.isRequired
}

export default AutoFillList