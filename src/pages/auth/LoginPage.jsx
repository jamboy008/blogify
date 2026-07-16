import { useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

const BASE_URL = import.meta.env.VITE_API_BASE_URL

import { useRef } from 'react'
function LoginPage() {
	const navigate = useNavigate()
	// let [form, setForm] = useState("");
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
			// GiToaster.error('loginda muammo')
			console.log(error)
		}
	}

	return (
		<div>
			<h1>Login Page</h1>

			<form onSubmit={handleSubmit}>
				<label>
					<p>Email</p>
					<input
						className='border border-black w-50 h-10'
						type='email'
						ref={emailRef}
					/>
				</label>
				<label>
					<p>Password</p>
					<input
						className='border border-black w-50 h-10'
						type='password'
						ref={passwordRef}
					/>
				</label>

				<Button type='submit' variant={'primary'} text='login' />
			</form>
		</div>
	)
}

export default LoginPage
