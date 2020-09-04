import React, { useEffect, useState } from 'react'
import { small } from '../../../../../assets/utils/Utils'

const Banner = () => {
	const [isSmall, setIsSmall] = useState()
	useEffect(() => {
		setIsSmall(small)
	}, [])
	return (
		<div className='banner__container'>
			<div className='banner__image'>
				<img
					src={
						!isSmall
							? require('../../../../../assets/images/background/banner.png')
							: require('../../../../../assets/images/background/bannerResponsive.png')
					}
					alt='Banner'
				/>
			</div>
			<div className='banner__content'>
				<p className='banner__content__text banner__content__text--title'>ENVÍO GRATIS X COMPRA</p>
				<p className='banner__content__text banner__content__text--option'>SUPERIOR A $150.000</p>
			</div>
		</div>
	)
}

export default Banner
