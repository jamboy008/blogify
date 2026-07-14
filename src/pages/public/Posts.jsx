import React, { useState } from 'react'
import { Search, Calendar, ArrowRight } from 'lucide-react'
import posts from '../../data/posts'

function Posts() {
	const [activeCategory, setActiveCategory] = useState('All')
	const [searchTerm, setSearchTerm] = useState('')

	const categories = ['All', 'Technology', 'Productivity', 'Design']

	const filteredPosts = posts.filter(post => {
		const matchesCategory =
			activeCategory === 'All' || post.category === activeCategory
		const matchesSearch = post.title
			.toLowerCase()
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
				<div className='flex justify-center gap-2 mb-10 flex-wrap'>
					{categories.map(cat => (
						<button
							key={cat}
							onClick={() => setActiveCategory(cat)}
							className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
								activeCategory === cat
									? 'bg-indigo-600 text-white'
									: 'bg-white text-gray-600 border border-gray-200 hover:border-indigo-300'
							}`}
						>
							{cat}
						</button>
					))}
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredPosts.map(post => (
						<div
							key={post.id}
							className='bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow'
						>
							<div className='relative h-44'>
								<img
									src={post.image}
									alt={post.title}
									className='w-full h-full object-cover'
								/>
								<span className='absolute top-3 left-3 bg-white/90 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full'>
									{post.category}
								</span>
							</div>

							<div className='p-5'>
								<div className='flex items-center gap-2 text-xs text-gray-400 mb-2'>
									<Calendar size={14} />
									{post.date}
								</div>
								<h3 className='font-semibold text-gray-900 mb-2'>
									{post.title}
								</h3>
								<p className='text-sm text-gray-500 mb-4 line-clamp-2'>
									{post.excerpt}
								</p>
								<button className='flex items-center gap-1 text-indigo-600 text-sm font-medium hover:gap-2 transition-all'>
									Read more <ArrowRight size={14} />
								</button>
							</div>
						</div>
					))}
				</div>

				{filteredPosts.length === 0 && (
					<p className='text-center text-gray-400 mt-10'>
						Hech qanday post topilmadi.
					</p>
				)}
			</section>
		</div>
	)
}

export default Posts
