import React from 'react'

const Access = () => {
	return (
		<div className='access__content'>
			<div className='access__content--item'>
				<img src={require('../../../../images/icon/location.png')} alt='location' />
				<p>Tiendas</p>
			</div>
			<div className='access__content--item wish'>
				<img src={require('../../../../images/icon/wish.png')} alt='location' />
				<p>Lista de deseos</p>
			</div>
			<div className='access__content--item'>
				<img src={require('../../../../images/icon/shop.png')} alt='location' />
				<p>Mi bolsa</p>
			</div>
		</div>
	)
}

export default Access
