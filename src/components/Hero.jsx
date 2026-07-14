import React from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowRight, Feather, Leaf } from 'lucide-react'
import Button from './Button'

function Hero() {
	return (
		<section className='bg-gradient-to-br from-indigo-50 via-purple-50 to-white'>
			<div className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center'>
				<div>
					<h1 className='text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight'>
						Create, Read, <br />
						<span className='text-indigo-600'>Inspire.</span>
					</h1>
					<p className='mt-6 text-gray-600 text-lg max-w-md'>
						Discover stories written by amazing people. Share your knowledge and
						inspire others with your unique perspective.
					</p>
					<div className='mt-8 flex flex-wrap gap-4'>
						<NavLink to='/posts'>
							<Button
								text='Explore Posts'
								variant='primary'
								icon={<ArrowRight size={18} />}
							/>
						</NavLink>
						<NavLink to='/login'>
							<Button text='Get Started' variant='outline' />
						</NavLink>
					</div>
				</div>

				<div className='relative'>
					<div className='bg-white rounded-2xl shadow-xl p-8 flex items-center justify-center h-72 md:h-80 '>
						{/* <div className='text-center'>
							<Feather size={48} className='mx-auto text-indigo-600' />
							<p className='mt-4 font-semibold text-gray-800'>
								Blogify Community
							</p>
							<p className='text-sm text-gray-500'>
								Yozing, o'qing, ilhomlaning
							</p>
						</div> */}
						<img src="../public/rasm.jpg" alt="" />
					</div>
					<Leaf
						className='absolute -bottom-4 -left-4 text-indigo-200'
						size={64}
					/>
					<Leaf
						className='absolute -top-4 -right-4 text-purple-200 rotate-90'
						size={64}
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
