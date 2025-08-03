import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';

import appStore from './appStore';
import ErrorPage from './components/ErrorPage';
import Header from './components/Header';
import Watch from './components/Watch';



function App() {

  const appRouter = createBrowserRouter([
        {path:'/',
        element:<Body/>,
        children:[{
             path:'/',
             element: <MainContainer/>
        },
        {
             path:'/watch',
             element: <Watch/>
        }
           

        ]
        },
        {path:'/error',
        element:<ErrorPage/>
        }
    ])
  return (
    <Provider store={appStore}>
        <div>
          <Header/>
          <RouterProvider router={appRouter}/>
        <Body/>
      </div>

    </Provider>
    
  );
}

export default App;
