import React from 'react'

import Banner from './component/banner/Banner'
import Header from '../../../assets/components/header/Header'
import Contact from './component/contact/Contact'

const FormHome = () => {
	return (
		<div className='container'>
			<Banner />
			<Header />
			<div className='content'>
				<hr />
				<Contact/>
			</div>
		</div>
	)
}

export const Home = FormHome
