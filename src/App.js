import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Main from './Main/Main';
import Privateroute from './Privateroute/Privateroute';
import Orders from './components/Orders/Orders';


function App() {
  let route = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      loader: () => {
        return fetch('https://jsonplaceholder.typicode.com/users')
      },
      children: ([
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/home',
          element: <Home></Home>
        },
        {
          path: '/order',
          element: <Privateroute>
            <Orders></Orders>
          </Privateroute>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ])
    },

  ])
  return (
    <div className="App">
      <RouterProvider
        router={route}
      ></RouterProvider>
    </div>
  );
}

export default App;
