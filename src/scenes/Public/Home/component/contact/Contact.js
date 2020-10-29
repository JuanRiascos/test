import React, { useState } from 'react'

import Input from '../../../../../assets/components/input/Input'
import Select from '../../../../../assets/components/select/Select'
import Button from '../../../../../assets/components/button/Button'

import { menus as menuAction } from '../../../../../services/Menu/Actions'
import { useDispatch } from 'react-redux'

const Contact = () => {
	const { post } = menuAction
	const dispatch = useDispatch()

	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [city, setCity] = useState('')

	const _handleSubmit = () => {
		if (!email) {
			return alert('Email requerido')
		}
		if (!phone) {
			return alert('Telefono requerido')
		}
		if (!city) {
			return alert('Ciudad requerida')
		}

		dispatch(post({ city, email, phone }))

	}

	// useEffect(() => {
	// 	effect
	// 	return () => {
	// 		cleanup
	// 	}
	// }, [input])

	return (
		<div className='contact'>
			<div className='contact__form'>
				<h1 className='contact--title'>LOREM IPSUM DOLOR SIT</h1>
				<div className='contact__option'>
					<div className='floating-form'>
						<Input placeholder='Email' type='email' getItem={setEmail} />
						<Input placeholder='Celular' type='number' getItem={setPhone} />
					</div>
					<Select getCity={setCity} />
				</div>
				<Button title='Enviar' onSubmit={_handleSubmit} />
			</div>
			<div className='contact__background'>
				<img src={require('../../../../../assets/images/background/person.jpg')} alt='background' />
			</div>
		</div>
	)
}

export default Contact
