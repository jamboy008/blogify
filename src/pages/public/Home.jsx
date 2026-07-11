import React from 'react'
import { NavLink } from 'react-router-dom'
import { Zap, ShieldCheck, Settings, ArrowRight, Calendar } from 'lucide-react'

import Navbar from '../../components/Navbar'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import posts from '../../data/posts'

const features = [
	{
		icon: Zap,
		title: 'Fast',
		description:
			'Lightning-fast performance with modern web technologies for the best reading experience.',
	},
	{
		icon: ShieldCheck,
		title: 'Secure',
		description:
			'Your data is protected with industry-standard security practices and encryption.',
	},
	{
		icon: Settings,
		title: 'Easy to Manage',
		description:
			'Intuitive admin dashboard makes content management effortless and enjoyable.',
	},
]

function Home() {
	return (
		<>
			<Navbar />
			<Hero />

			<section className='max-w-7xl mx-auto px-6 py-20 text-center'>
				<h2 className='text-3xl font-bold text-gray-900'>
					Why Choose Blogify?
				</h2>
				<p className='mt-3 text-gray-500 max-w-xl mx-auto'>
					Built with modern technologies and best practices to provide the best
					blogging experience.
				</p>

				<div className='mt-12 grid md:grid-cols-3 gap-6 text-left'>
					{features.map(({ icon: Icon, title, description }) => (
						<div
							key={title}
							className='border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow'
						>
							<div className='w-11 h-11 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600'>
								<Icon size={22} />
							</div>
							<h3 className='mt-4 font-semibold text-gray-900'>{title}</h3>
							<p className='mt-2 text-sm text-gray-500'>{description}</p>
						</div>
					))}
				</div>
			</section>

			<section className='bg-gray-50'>
				<div className='max-w-7xl mx-auto px-6 py-20'>
					<div className='flex items-center justify-between'>
						<div>
							<h2 className='text-3xl font-bold text-gray-900'>Latest Posts</h2>
							<p className='mt-2 text-gray-500'>
								Check out our most recent articles.
							</p>
						</div>
						<NavLink to='/posts' className='hidden sm:block'>
							<Button
								text='View All'
								variant='outline'
								icon={<ArrowRight size={16} />}
							/>
						</NavLink>
					</div>

					<div className='mt-10 grid md:grid-cols-3 gap-8'>
						{posts.map(post => (
							<NavLink
								to={`/posts/${post.id}`}
								key={post.id}
								className='bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow'
							>
								<div
									className={`h-44 bg-gradient-to-br ${post.gradient} relative`}
								>
									<span className='absolute top-3 left-3 bg-white/90 text-xs font-medium text-gray-800 px-3 py-1 rounded-full'>
										{post.category}
									</span>
								</div>
								<div className='p-5'>
									<div className='flex items-center gap-2 text-xs text-gray-400'>
										<Calendar size={14} />
										{post.date}
									</div>
									<h3 className='mt-2 font-semibold text-gray-900'>
										{post.title}
									</h3>
									<p className='mt-2 text-sm text-gray-500 line-clamp-2'>
										{post.excerpt}
									</p>
									<span className='mt-3 inline-flex items-center gap-1 text-indigo-600 text-sm font-medium'>
										Read more <ArrowRight size={14} />
									</span>
								</div>
							</NavLink>
						))}
					</div>

					<div className='mt-8 flex justify-center sm:hidden'>
						<NavLink to='/posts'>
							<Button
								text='View All'
								variant='outline'
								icon={<ArrowRight size={16} />}
							/>
						</NavLink>
					</div>
				</div>
			</section>

			<Footer />
		</>
	)
}

export default Home
