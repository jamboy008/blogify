import React from 'react'
import { Link } from 'react-router-dom'
import { PenLine, Home, ArrowLeft } from 'lucide-react'
import Button from '../../components/Button'

function ErrorPage() {
	return (
		<div className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-white px-6 text-center'>
			<Link
				to='/'
				className='flex items-center gap-2 text-indigo-600 font-bold text-xl mb-10'
			>
				<PenLine size={22} />
				Blogify
			</Link>

			<h1 className='text-8xl md:text-9xl font-extrabold text-indigo-600'>
				404
			</h1>

			<h2 className='mt-4 text-2xl md:text-3xl font-bold text-gray-900'>
				Sahifa topilmadi
			</h2>

			<p className='mt-3 text-gray-500 max-w-md'>
				Siz qidirayotgan sahifa mavjud emas, o'chirilgan yoki manzil noto'g'ri
				kiritilgan bo'lishi mumkin.
			</p>

			<div className='mt-8 flex flex-wrap justify-center gap-4'>
				<Link to='/'>
					<Button
						text='Bosh sahifaga qaytish'
						variant='primary'
						icon={<Home size={18} />}
					/>
				</Link>
				<button onClick={() => window.history.back()}>
					<Button
						text='Orqaga'
						variant='outline'
						icon={<ArrowLeft size={18} />}
					/>
				</button>
			</div>
		</div>
	)
}

export default ErrorPage
