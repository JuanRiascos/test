import React, { useState, useEffect, Fragment } from 'react'
import { AiOutlineUnorderedList, AiOutlineClose } from 'react-icons/ai'
import { IoIosArrowDown } from 'react-icons/io'

import Access from './components/access/Access'
import { useDispatch, useSelector } from 'react-redux'
import { menus as menuAction } from '../../../services/Menu/Actions'

const Header = () => {
	const { getAll } = menuAction
	const { menus } = useSelector((state) => state.menu)
	const dispatch = useDispatch()

	const [active, setActive] = useState(false)
	const selectMenu = () => {
		setActive(!active)
	}
	const onClikItem = (item) => {
		console.log(item)
	}

	useEffect(() => {
		dispatch(getAll())
	}, [dispatch, getAll])
	return (
		<header>
			<div className='header__container'>
				<div className='header__icon'>
					<img src={require('../../../assets/images/icon/Icon.png')} alt='Icon' />
				</div>
				<Access />
			</div>
			<nav className={active ? 'active' : undefined}>
				<div className={'nav__container'}>
					<div className='menu--icons' onClick={() => selectMenu()}>
						<AiOutlineUnorderedList className='menu' />
						<AiOutlineClose className='close' />
					</div>
					<ul className='nav__list'>
						{menus.data &&
							menus.data.map((menu) => (
								<Fragment key={menu.id}>
									<li onClick={() => !menu.subItems && onClikItem(menu.title)}>
										<a href='/#'>
											{menu.title}
											{menu.subItems && <IoIosArrowDown />}
										</a>
										{menu.subItems && (
											<ul className='sub-menu'>
												{menu.subItems.map((subItems) => (
													<li key={subItems.id} onClick={() => onClikItem(subItems.title)}>
														<a href='/#'>{subItems.title}</a>
													</li>
												))}
											</ul>
										)}
									</li>
								</Fragment>
							))}
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
