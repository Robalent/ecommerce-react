// Routeo de las vistas 
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Catalogo from './pages/Catalogo.jsx'
import Contacto from './pages/Contacto.jsx'
import Error from './pages/Error.jsx'
import PanelAdmin from './pages/PanelAdmin.jsx'
import CreateProductPage from './pages/CreateProductPage.jsx'
import EditProductPage from './pages/EditProductPage.jsx'
import ListEditProductPage from './pages/ListEditProductPage.jsx'

// listado de rutas del proyecto
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        index: true,
    },
    {
        path:"/catalogo",
        element: <Catalogo />  
    },
    {
        path:"/contacto",
        element: <Contacto /> ,
    },
    {
        path:"/products/create",
        element: <CreateProductPage/> ,
    },
    {
        path: "/products/edit/:id",
        element: <EditProductPage />
    },
    {
        path: "/PanelAdmin",
        element: <PanelAdmin/>
    },
    {
        path: "/ListEdit",
        element: <ListEditProductPage />
    },
    {
        path:"*",
        element: <Error />
    },
    
])