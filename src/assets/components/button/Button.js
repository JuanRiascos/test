import React from 'react'

const Button = ({ title, onSubmit }) => {
	return (
		<button className='button' type='submit' onClick={onSubmit}>
			{title}
		</button>
	)
}

export default Button
