import React from 'react'

import './search-box.style.css'

export const SearchBox = ({ placeholder, changeSearchText }) => {
	return (
		<div className="search-content">
			<input
				className="search"
				type="search"
				placeholder={placeholder}
				onChange={changeSearchText}
			/>
		</div>
	)
}
