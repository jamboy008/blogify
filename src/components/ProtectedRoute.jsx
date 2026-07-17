import { Navigate } from 'react-router-dom'

function ProtectedRoute({ children }) {
	let accessToken = localStorage.getItem('access')

	if (!accessToken) {
		return <Navigate to='/login' /> 
	}
	return children
}

export default ProtectedRoute
