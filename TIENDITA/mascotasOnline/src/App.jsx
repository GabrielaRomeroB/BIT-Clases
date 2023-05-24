import{ useRoutes, BrowserRouter} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import MyAccount from './pages/MyAccount'
import CartPage from './pages/CartPage'
import Products from './pages/Products'
import NotFound from './pages/NotFound'
import NavBar from './components/NavBar'


const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Home/>},
    {path: '/myaccount', element: <MyAccount/>}, /**se pone vacio porque es la ruta inicial */
    {path: '/cart', element: <CartPage/>},
    {path: '/products', element: <Products/>},
    {path: '/', element: <NotFound/>},
  ])

  return routes 
}


function App() {

  return (
   <div>
    <BrowserRouter>
    <AppRoutes/>
    <NavBar/>
    </BrowserRouter>
   </div>
  )
}

export default App
