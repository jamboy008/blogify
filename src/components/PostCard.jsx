import React from 'react'
import { Link } from 'react-router-dom'

function PostCard({ article }) {
	let { id, title, content, image, created_at, category } = article

	return (
		<Link
			to={`/posts/${id}`}
			className='group bg-white border border-gray-100 rounded-[24px] overflow-hidden flex flex-col'
		>
			<div className='relative w-full aspect-[16/10] overflow-hidden bg-gray-100'>
				<img
					src={image}
					alt={title}
					className='w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500'
				/>
				<span className='absolute top-4 left-4 bg-[#5636f3] text-white text-xs font-semibold px-3 py-1 rounded-full'>
					{category?.name || category}
				</span>
			</div>

			<div className='p-6 md:p-8 flex flex-col flex-grow gap-3'>
				<div className='flex items-center gap-2 text-xs text-[#6c7281]'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='14'
						height='14'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
					>
						<rect x='3' y='4' width='18' height='18' rx='2' ry='2'></rect>
						<line x1='16' y1='2' x2='16' y2='6'></line>
						<line x1='8' y1='2' x2='8' y2='6'></line>
						<line x1='3' y1='10' x2='21' y2='10'></line>
					</svg>
					<span>{created_at}</span>
				</div>

				<h3 className='text-lg md:text-xl font-bold text-[#1a1a24] leading-snug group-hover:text-[#5636f3] transition-colors'>
					{title}
				</h3>

				<p className='text-[14px] text-[#6c7281] leading-relaxed line-clamp-2 flex-grow'>
					{content}
				</p>

				<div className='pt-2 flex items-center gap-1.5 text-sm font-bold text-[#5636f3] cursor-pointer group/link'>
					<span>Read more</span>
					<svg
						className='w-4 h-4 transform group-hover/link:translate-x-1 transition-transform duration-200'
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						stroke='currentColor'
						strokeWidth='2.5'
						viewBox='0 0 24 24'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
						></path>
					</svg>
				</div>
			</div>
		</Link>
	)
}

export default PostCard
