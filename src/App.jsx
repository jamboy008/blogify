import React from 'react'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Button from './components/Button'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Input from './components/Input'
import Navbar from './components/Navbar'

import PostDetail from './pages/public/PostDetail'
import CreatePost from './pages/admin/CreatePost'
import Home from './pages/public/Home'
import Posts from './pages/public/Posts'
import ErrorPage from './pages/public/ErrorPage'

import AuthLayout from './layouts/AuthLayout'
import PublicLayout from './layouts/PublicLayout'

import AdminLayout from './layouts/AdminLayout'
import LoginPage from './pages/auth/LoginPage'
import Dashboard from './pages/admin/Dashboard'
import UpdatePost from './pages/admin/UpdatePost'

function App() { 	
const routes = createBrowserRouter([
{
	path:'/',
	element:<PublicLayout/>,
	children:[

	{
		index:true,
		element:<Home/>,
	},
{
	path:"posts",
	element:<Posts/>
},

{
path:'/posts/:id',
element:<PostDetail/>,
}
	]
},

{
	path:"/admin",
	element:<AdminLayout/>,
	children:[
		{
			index:true,
			element:<Dashboard/>,
		},
		{
			path:'updatepost',
			element:<UpdatePost/>,
		},
		{
			path:'createpost',
			element:<CreatePost/>
		},
	],
},
{
	path:"/login",
	element:<AuthLayout/>,
	children:[
		{
			index:true,
			element:  <LoginPage/>,
		},
	],
},
{
	path:"*",
	element:<ErrorPage/>
}
])





	return <RouterProvider router={routes}/>
		
	


	
}

export default App
