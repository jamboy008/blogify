import { useNavigate, Link } from 'react-router-dom'
import { useRef } from 'react'
import { Edit, ArrowLeft } from 'lucide-react'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

function LoginPage() {
	const navigate = useNavigate()
	let emailRef = useRef()
	let passwordRef = useRef()

	async function handleSubmit(e) {
		e.preventDefault()

		let formData = {
			email: emailRef.current.value,
			password: passwordRef.current.value,
		}

		try {
			console.log('boshlandi')

			let res = await fetch(
				'https://tevoj98108.pythonanywhere.com/auth/login/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(formData),
				},
			)
			if (!res.ok) {
				throw new Error('Yuborishda muammo')
			}

			let data = await res.json()
			localStorage.setItem('access', data.data.access)
			navigate('/admin')
			console.log(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div className='min-h-screen grid grid-cols-1 lg:grid-cols-2'>
			<div className='flex flex-col px-8 py-10 lg:px-24'>
				<Link
					to='/'
					className='flex items-center gap-2 text-indigo-600 font-bold text-xl'
				>
					<Edit size={22} />
					Blogify
				</Link>

				<Link
					to='/'
					className='flex items-center gap-2 text-sm text-gray-700 mt-8 hover:text-indigo-600 transition'
				>
					<ArrowLeft size={16} />
					Back to Home
				</Link>

				<div className='flex-1 flex items-center'>
					<div className='w-full max-w-md mx-auto border border-gray-200 rounded-2xl p-8 shadow-sm'>
						<h1 className='text-3xl font-bold text-gray-900'>Welcome Back</h1>
						<p className='text-gray-500 mt-2 mb-6'>
							Enter your credentials to access your account
						</p>

						<form onSubmit={handleSubmit} className='space-y-4'>
							<div>
								<label className='block text-sm font-semibold text-gray-900 mb-1'>
									Email
								</label>
								<input
									type='email'
									ref={emailRef}
									placeholder='name@example.com'
									className='w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition'
								/>
							</div>

							<div>
								<label className='block text-sm font-semibold text-gray-900 mb-1'>
									Password
								</label>
								<input
									type='password'
									ref={passwordRef}
									placeholder='••••••••'
									className='w-full h-11 px-4 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition'
								/>
							</div>

							<button
								type='submit'
								className='w-full h-11 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition'
							>
								Login
							</button>
						</form>

						<p className='text-center text-sm text-gray-500 mt-6'>
							Don't have an account?{' '}
							<Link
								to='/register'
								className='text-indigo-600 font-medium hover:underline'
							>
								Sign up
							</Link>
						</p>
					</div>
				</div>
			</div>

			<div className='hidden lg:flex flex-col items-center justify-center bg-gray-50 px-12'>
				<div className='relative w-full max-w-md aspect-square rounded-3xl overflow-hidden shadow-xl'>
					<img
						src='/login.jpg'
						alt='Start your journey'
						className='w-full h-full object-cover'
					/>
				</div>

				<h2 className="font-['Inter'] font-bold text-[30px] leading-[36px] tracking-[-0.75px] text-center text-gray-900 mt-8">
					Start Your Journey
				</h2>
				<p className="font-['Inter'] font-normal text-[18px] leading-[28px] tracking-[0%] text-center text-gray-500 mt-2">
					Join thousands of creators sharing their stories on Blogify
				</p>
			</div>
		</div>
	)
}

export default LoginPage
