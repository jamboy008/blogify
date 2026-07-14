import webDevImg from '../assets/web-dev.jpg'
import productivityImg from '../assets/productivity.jpg'
import designImg from '../assets/design.jpg'

const posts = [
	{
		id: 1,
		category: 'Technology',
		date: 'Nov 20, 2025',
		title: 'The Future of Web Development',
		excerpt:
			'Exploring the latest trends and technologies shaping the future of web development in 2025.',
		image: webDevImg,
	},
	{
		id: 2,
		category: 'Productivity',
		date: 'Nov 18, 2025',
		title: 'Mastering Productivity',
		excerpt:
			'Proven strategies and tools to boost your productivity and achieve your goals faster.',
		image: productivityImg,
	},
	{
		id: 3,
		category: 'Design',
		date: 'Nov 15, 2025',
		title: 'Design Principles That Matter',
		excerpt:
			'Essential design principles every creator should know to build stunning user experiences.',
		image: designImg,
	},
]

export default posts
