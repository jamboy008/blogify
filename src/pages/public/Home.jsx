import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Zap, ShieldCheck, Settings, ArrowRight } from 'lucide-react'

import Hero from '../../components/Hero'
import Button from '../../components/Button'
import LatestPost from '../../components/LatestPost'

const BASE_URL = import.meta.env.VITE_API_BASE_URL
console.log('BASE_URL:', BASE_URL)

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
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
		async function getPosts() {
			setLoading(true)
			setError(false)
			try {
				const res = await fetch(BASE_URL + 'articles/')
				if (!res.ok) {
					throw new Error('olib kelishda muammo')
				}
				const data = await res.json()
				console.log(data) // struktura moslashmasa shu yerdan tekshiring
				// Bosh sahifada faqat oxirgi 3 ta postni ko'rsatamiz
				setPosts(data.data.results.slice(0, 3))
			} catch (error) {
				console.log(error)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		getPosts()
	}, [])

	return (
		<>
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

					{loading && (
						<p className='text-center text-gray-400 py-16'>Yuklanmoqda...</p>
					)}

					{error && (
						<p className='text-center text-red-400 py-16'>
							Ma'lumotlarni yuklashda xatolik yuz berdi.
						</p>
					)}

					{!loading && !error && (
						<div className='mt-10'>
							<LatestPost articles={posts} />
						</div>
					)}

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
		</>
	)
}

export default Home
