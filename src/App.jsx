import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import CreatePost from './pages/admin/CreatePost'
import ErrorPage from './pages/public/ErrorPage'
import Home from './pages/public/Home'
import PostDetail from './pages/public/PostDetail'
import Posts from './pages/public/Posts'

import AuthLayout from './layouts/AuthLayout'
import PublicLayout from './layouts/PublicLayout'

import AdminLayout from './layouts/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import UpdatePost from './pages/admin/UpdatePost'
import LoginPage from './pages/auth/LoginPage'

import ProtectedRoute from './components/ProtectedRoute'

function App() {
	const routes = createBrowserRouter([
		{
			path: '/',
			element: <PublicLayout />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: 'posts',
					element: <Posts />,
				},

				{
					path: '/posts/:id',
					element: <PostDetail />,
				},
			],
		},

		{
			path: '/admin',
			element: (
				<ProtectedRoute>
					<AdminLayout />
				</ProtectedRoute>
			),
			children: [
				{
					index: true,
					element: <Dashboard />,
				},
				{
					path: 'updatepost',
					element: <UpdatePost />,
				},
				{
					path: 'createpost',
					element: <CreatePost />,
				},
			],
		},
		{
			path: '/login',
			element: <AuthLayout />,
			children: [
				{
					index: true,
					element: <LoginPage />,
				},
			],
		},
		{
			path: '*',
			element: <ErrorPage />,
		},
	])

	return <RouterProvider router={routes} />
}

export default App
