import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { PenLine, Menu, X } from 'lucide-react'
import Button from './Button'

function Navbar() {
	const [isOpen, setIsOpen] = useState(false)

	const links = [
		{ name: 'Home', path: '/' },
		{ name: 'Posts', path: '/posts' },
	]

	return (
		<header className='sticky top-0 z-50 bg-white border-b border-gray-100'>
			<nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4'>
				<NavLink
					to='/'
					className='flex items-center gap-2 text-indigo-600 font-bold text-xl'
				>
					<PenLine size={22} />
					Blogify
				</NavLink>

				<div className='hidden md:flex items-center gap-10'>
					<div className='flex items-center gap-8 text-sm font-medium text-gray-700'>
						{links.map(link => (
							<NavLink
								key={link.name}
								to={link.path}
								className={({ isActive }) =>
									isActive
										? 'text-indigo-600'
										: 'hover:text-indigo-600 transition-colors'
								}
							>
								{link.name}
							</NavLink>
						))}
					</div>

					<NavLink to='/login'>
						<Button text='Login' variant='primary' />
					</NavLink>
				</div>

				<button
					className='md:hidden text-gray-700'
					onClick={() => setIsOpen(!isOpen)}
					aria-label='Menyuni ochish'
				>
					{isOpen ? <X size={24} /> : <Menu size={24} />}
				</button>
			</nav>

			{isOpen && (
				<div className='md:hidden px-6 pb-4 flex flex-col gap-4 border-t border-gray-100'>
					{links.map(link => (
						<NavLink
							key={link.name}
							to={link.path}
							onClick={() => setIsOpen(false)}
							className='text-gray-700 hover:text-indigo-600 font-medium'
						>
							{link.name}
						</NavLink>
					))}
					<NavLink to='/login' onClick={() => setIsOpen(false)}>
						<Button text='Login' variant='primary' className='w-full' />
					</NavLink>
				</div>
			)}
		</header>
	)
}

export default Navbar
