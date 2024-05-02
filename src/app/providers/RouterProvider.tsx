import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LoginPage from '../../pages/login/ui'

const router = createBrowserRouter([
	{
		path: '/login',
		element: <LoginPage />,
	},
])

export function BrowserRouter() {
	return <RouterProvider router={router} />
}
