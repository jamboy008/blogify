import React from 'react'
import PostCard from './PostCard'

function LatestPost({ articles }) {
	return (
		<div className='grid md:grid-cols-3 gap-8'>
			{articles &&
				articles.map(item => <PostCard article={item} key={item.id} />)}
		</div>
	)
}

export default LatestPost
