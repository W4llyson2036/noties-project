// lib
import { createBrowserRouter } from 'react-router-dom';

// Components
import { Login }               from '../pages/Login/Login';
import { CreateNewAccount }    from '../pages/CreateNewAccount/CreateNewAccount';
import { MainLayout }          from '../layout/MainLayout';
import { Home }                from '../pages/Home/Home/Home';
import { ReviewCard }          from '../pages/Home/ReviewCard/ReviewCard';
import { AddCard }             from '../pages/Home/AddCard/AddCard';
import { CreateNewDeck }       from '../pages/CreateNewDeck/CreateNewDeck';
import { About }               from '../pages/About/About';
import { ViewCards }           from '../pages/ViewCards/ViewCards';
import { EditCard }            from '../pages/ViewCards/EditCard/EditCard';

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Login />
    }, {
        path: '/creatnewaccount',
        element: <CreateNewAccount />
    }, {
        element: <MainLayout />,
        children: [
            {
                path: '/home', 
                element: <Home />
            }, {
                path: '/home/createcard/:fordeckname/:id',
                element: <AddCard />
            }, {
                path: '/home/review/:deckname/:id',
                element: <ReviewCard />
            }, {
                path: '/createnewdeck',
                element: <CreateNewDeck />
            }, {
                path: '/about',
                element: <About />
            }
            , {
                path: '/viewcards',
                element: <ViewCards />
            }, {
                path: '/viewcards/:deckname/:id',
                element: <EditCard />
            }
        ]
    }
])