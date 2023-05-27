import { createBrowserRouter } from 'react-router-dom';
import Main from '../layouts/Main';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import RoomDetails from '../Pages/RoomDetails/RoomDetails';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Main />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/rooms/:id',
				element: <RoomDetails />
			}
		]
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '/Signup',
		element: <SignUp />
	}
]);
