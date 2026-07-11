import React from 'react'
import { NavLink } from 'react-router-dom'
import { PenLine } from 'lucide-react'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'

function Footer() {
	return (
		<footer className='bg-white border-t border-gray-100'>
			<div className='max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10'>
				<div>
					<div className='flex items-center gap-2 text-indigo-600 font-bold text-xl'>
						<PenLine size={20} />
						Blogify
					</div>
					<p className='mt-4 text-gray-500 text-sm max-w-xs'>
						Create, read, and inspire. Discover amazing stories written by
						talented creators from around the world.
					</p>
				</div>

				<div>
					<h4 className='font-semibold text-gray-900 mb-4'>Quick Links</h4>
					<ul className='space-y-2 text-sm text-gray-500'>
						<li>
							<NavLink to='/' className='hover:text-indigo-600'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/posts' className='hover:text-indigo-600'>
								Posts
							</NavLink>
						</li>
						<li>
							<NavLink to='/login' className='hover:text-indigo-600'>
								Login
							</NavLink>
						</li>
					</ul>
				</div>

				<div>
					<h4 className='font-semibold text-gray-900 mb-4'>Connect</h4>
					<div className='flex gap-4 text-gray-400 text-lg'>
						<FaTwitter className='hover:text-indigo-600 cursor-pointer' />
						<FaGithub className='hover:text-indigo-600 cursor-pointer' />
						<FaLinkedin className='hover:text-indigo-600 cursor-pointer' />
					</div>
				</div>
			</div>

			<div className='border-t border-gray-100 py-6 text-center text-sm text-gray-400'>
				© {new Date().getFullYear()} Blogify. Barcha huquqlar himoyalangan.
			</div>
		</footer>
	)
}

export default Footer
