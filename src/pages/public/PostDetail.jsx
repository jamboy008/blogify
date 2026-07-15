import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Calendar, ArrowLeft, User, ArrowRight } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function PostDetail() {
	const { id } = useParams()
	const [post, setPost] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	const [relatedPosts, setRelatedPosts] = useState([])

	useEffect(() => {
		async function getPost() {
			setLoading(true)
			setError(false)
			try {
				const res = await fetch(BASE_URL + `articles/${id}/`)
				if (!res.ok) {
					throw new Error('olib kelishda muammo')
				}
				const data = await res.json()
				console.log(JSON.stringify(data.data, null, 2)) // barcha fieldlarni ko'rish uchun
				setPost(data.data)
			} catch (error) {
				console.log(error)
				setError(true)
			} finally {
				setLoading(false)
			}
		}
		getPost()
	}, [id])

	// Post yuklanganidan keyin, "related" postlarni olamiz
	// Avval bir xil kategoriyadagilarni qidiradi, topilmasa boshqa postlarni ko'rsatadi
	useEffect(() => {
		async function getRelated() {
			if (!post) return
			try {
				const res = await fetch(BASE_URL + 'articles/')
				if (!res.ok) return
				const data = await res.json()
				const all = data.data.results || []
				const others = all.filter(item => item.id !== post.id)

				const sameCategory = others.filter(
					item => item.category?.id === post.category?.id,
				)

				const finalList = sameCategory.length > 0 ? sameCategory : others

				setRelatedPosts(finalList.slice(0, 2))
			} catch (error) {
				console.log(error)
			}
		}
		getRelated()
	}, [post])

	if (loading) {
		return (
			<div className='max-w-3xl mx-auto px-6 py-20 text-center text-gray-500'>
				Yuklanmoqda...
			</div>
		)
	}

	if (error || !post) {
		return (
			<div className='max-w-3xl mx-auto px-6 py-20 text-center text-gray-500'>
				Post topilmadi.
			</div>
		)
	}

	return (
		<>
			<article className='max-w-3xl mx-auto px-6 py-12'>
				<Link
					to='/posts'
					className='inline-flex items-center gap-1 text-indigo-600 text-sm mb-6 hover:gap-2 transition-all'
				>
					<ArrowLeft size={16} /> Back to Posts
				</Link>

				{/* category obyekt ({ id, name }) bo'lgani uchun .name olamiz */}
				<span className='inline-block bg-indigo-100 text-indigo-600 text-xs font-semibold px-3 py-1 rounded-full'>
					{post.category?.name}
				</span>

				<h1 className='text-3xl md:text-4xl font-bold text-gray-900 mt-4'>
					{post.title}
				</h1>

				<div className='flex items-center gap-4 text-sm text-gray-400 mt-3'>
					<span className='flex items-center gap-1.5'>
						<User size={14} />
						{post.author?.username || post.author?.name || 'Anonim'}
					</span>
					<span className='flex items-center gap-1.5'>
						<Calendar size={14} />
						{post.created_at}
					</span>
				</div>

				<img
					src={post.image}
					alt={post.title}
					className='w-full h-72 md:h-96 object-cover rounded-xl mt-8'
				/>

				<div className='prose max-w-none mt-8 text-gray-700 leading-relaxed whitespace-pre-line'>
					{post.content}
				</div>
			</article>

			{relatedPosts.length > 0 && (
				<section className='bg-gray-50'>
					<div className='max-w-3xl mx-auto px-6 py-16'>
						<h2 className='text-2xl font-bold text-gray-900 mb-8'>
							Related Posts
						</h2>

						<div className='grid sm:grid-cols-2 gap-6'>
							{relatedPosts.map(item => (
								<Link
									to={`/posts/${item.id}`}
									key={item.id}
									className='bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow'
								>
									<div className='relative h-36'>
										<img
											src={item.image}
											alt={item.title}
											className='w-full h-full object-cover'
										/>
										<span className='absolute top-3 left-3 bg-[#1e2749]/90 text-white text-xs font-semibold px-3 py-1 rounded-full'>
											{item.category?.name}
										</span>
									</div>
									<div className='p-4'>
										<div className='flex items-center gap-2 text-xs text-gray-400 mb-2'>
											<Calendar size={14} />
											{item.created_at}
										</div>
										<h3 className='font-semibold text-gray-900 mb-1'>
											{item.title}
										</h3>
										<span className='inline-flex items-center gap-1 text-indigo-600 text-sm font-medium'>
											Read more <ArrowRight size={14} />
										</span>
									</div>
								</Link>
							))}
						</div>
					</div>
				</section>
			)}
		</>
	)
}

export default PostDetail
