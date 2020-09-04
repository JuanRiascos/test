import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import { data as cities } from '../../utils/City.json'

const Select = ({ getCity }) => {
	const [value, setValue] = useState('Ciudad')
	const onChangeCity = (city) => {
		setValue(city)
		getCity(city)
	}
	return (
		<div className='dropdown'>
			<div className='dropdown--select'>
				<span className='select'>{value}</span>
				<IoIosArrowDown />
			</div>
			<div className='dropdown__list'>
				<div className='dropdown__list--item principal' onClick={() => setValue('Ciudad')}>
					Ciudad
				</div>
				{cities.map((city) => (
					<div key={city.id} className='dropdown__list--item' onClick={() => onChangeCity(city.name)}>
						{city.name}
					</div>
				))}
			</div>
		</div>
	)
}

export default Select
