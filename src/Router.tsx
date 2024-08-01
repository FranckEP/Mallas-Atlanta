import { createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Home Page/HomePage';
import Gallery from './Pages/Gallery Page/GalleryPage';
import Products from './Pages/Products Page/ProductsPage';
import Contact from './Pages/Contact Page/ContactPage';
import Layout from './Layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'nosotros', element: <HomePage /> },
      { path: 'galeria', element: <Gallery /> },
      { path: 'productos', element: <Products /> },
      { path: 'contactanos', element: <Contact /> },
      { path: '*', element: <div>Not Found</div> }
    ]
  }
]);
