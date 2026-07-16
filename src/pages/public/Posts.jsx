import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Search, Calendar, ArrowRight } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_API_BASE_URL


function Posts() {
	const [posts, setPosts] = useState([])
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)
	const [activeCategory, setActiveCategory] = useState('All')
	const [searchTerm, setSearchTerm] = useState('')

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
				console.log(JSON.stringify(data.data.results, null, 2)) 
				setPosts(data.data.results)
			} catch (error) {
				console.log(error)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		getPosts()
	}, [])


	const categories = [
		'All',
		...new Set(posts.map(post => post.category?.name).filter(Boolean)),
	]

	const filteredPosts = posts.filter(post => {
		const matchesCategory =
			activeCategory === 'All' || post.category?.name === activeCategory
		const matchesSearch = post.title
			?.toLowerCase()
			.includes(searchTerm.toLowerCase())
		return matchesCategory && matchesSearch
	})

	return (
		<div>
			<section className='bg-indigo-50 py-16 px-6 text-center'>
				<h1 className='text-4xl font-bold text-gray-900'>Explore Our Posts</h1>
				<p className='mt-3 text-gray-500'>
					Discover amazing content from talented writers across various topics
				</p>

				<div className='mt-8 max-w-md mx-auto relative'>
					<Search
						size={18}
						className='absolute left-4 top-1/2 -translate-y-1/2 text-gray-400'
					/>
					<input
						type='text'
						placeholder='Search posts...'
						value={searchTerm}
						onChange={e => setSearchTerm(e.target.value)}
						className='w-full pl-11 pr-4 py-3 rounded-full border border-gray-200 bg-white text-sm outline-none focus:ring-2 focus:ring-indigo-400'
					/>
				</div>
			</section>

			<section className='max-w-7xl mx-auto px-6 py-12'>
				<div className='flex justify-center mb-10'>
					<div className='inline-flex flex-wrap justify-center gap-1 bg-gray-100 rounded-full p-1 border border-gray-200'>
						{categories.map(cat => (
							<button
								key={cat}
								onClick={() => setActiveCategory(cat)}
								className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
									activeCategory === cat
										? 'bg-white text-gray-900 shadow-sm'
										: 'text-gray-500 hover:text-gray-700'
								}`}
							>
								{cat}
							</button>
						))}
					</div>
				</div>

				{loading && (
					<p className='text-center text-gray-400 py-10'>Yuklanmoqda...</p>
				)}

				{error && (
					<p className='text-center text-red-400 py-10'>
						Ma'lumotlarni yuklashda xatolik yuz berdi.
					</p>
				)}

				{!loading && !error && (
					<>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{filteredPosts.map(post => (
								<Link
									to={`/posts/${post.id}`}
									key={post.id}
									className='bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow block'
								>
									<div className='relative h-44'>
										<img
											src={post.image}
											alt={post.title}
											className='w-full h-full object-cover'
										/>
										<span className='absolute top-3 left-3 bg-[#1e2749]/90 text-white text-xs font-semibold px-3 py-1 rounded-full'>
											{post.category?.name}
										</span>
									</div>

									<div className='p-5'>
										<div className='flex items-center gap-2 text-xs text-gray-400 mb-2'>
											<Calendar size={14} />
											{post.created_at}
										</div>
										<h3 className='font-semibold text-gray-900 mb-2'>
											{post.title}
										</h3>
										<p className='text-sm text-gray-500 mb-4 line-clamp-2'>
											{post.content}
										</p>
										<span className='flex items-center gap-1 text-indigo-600 text-sm font-medium'>
											Read more <ArrowRight size={14} />
										</span>
									</div>
								</Link>
							))}
						</div>

						{filteredPosts.length === 0 && (
							<p className='text-center text-gray-400 mt-10'>
								Hech qanday post topilmadi.
							</p>
						)}
					</>
				)}
			</section>
		</div>
	)
}

export default Posts
