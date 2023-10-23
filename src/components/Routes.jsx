import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import des Pages
import Home from '../pages/Home';
import Product from '../pages/Logement';
import About from '../pages/About';
import Error404 from '../pages/Error404';

// Fonction de configuration des routes de l'application
function Routes() {
    // Création d'un routeur en utilisant createBrowserRouter
    const router = createBrowserRouter([
        // Définition des routes et de leurs composants associés
        { path: '/', element: <Home />, errorElement: <Error404 /> },
        { path: '/About', element: <About />, errorElement: <Error404 /> },
        { path: '/Logement', element: <Product />, errorElement: <Error404 /> },
        { path: '*', element: <Error404 /> }, // toutes les routes non trouvées iront vers errorPage
    ]);
    // Rendu des routes dans l'élément avec l'ID "root" en utilisant le composant RouterProvider
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>,
    );
}

export default Routes;
