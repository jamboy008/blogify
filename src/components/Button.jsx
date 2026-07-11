import React from 'react'

function Button({
	text,
	variant = 'primary',
	onClick,
	icon,
	type = 'button',
	className = '',
}) {
	const variants = {
		primary:
			'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm shadow-indigo-200',
		outline: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-50',
		secondary: 'bg-indigo-50 text-indigo-600 hover:bg-indigo-100',
	}

	return (
		<button
			type={type}
			onClick={onClick}
			className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${variants[variant]} ${className}`}
		>
			{text}
			{icon}
		</button>
	)
}

export default Button
