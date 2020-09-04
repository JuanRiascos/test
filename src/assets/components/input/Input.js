import React from 'react'

const Input = ({ placeholder, type, getItem }) => {
	const _handleChage = (event) => {
		const value = event.target.value
		getItem(value)
	}
	return (
		<div className='floating-label'>
			<input className='floating-input' type={type} placeholder=' ' onChange={_handleChage} />
			<span className='highlight'></span>
			<label>{placeholder}</label>
		</div>
	)
}

export default Input
