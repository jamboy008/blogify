import React from 'react'
import { Navigate } from 'react-router-dom'


function ProtectedRoute(children) {
	let accessToken = locallStorage.getItem("access")

	if(!accessToken){
		return <Navigate to={'/login'}/>
	}
	return children
}

export default ProtectedRoute
