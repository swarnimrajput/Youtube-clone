import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';
import { Provider } from 'react-redux';
import store from './components/Utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Children } from 'react';
import Maincontainer from './components/Maincontainer';
import Watchpage from './components/Watchpage';

const approuter = createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element:<Maincontainer/>,
    },
    {
      path:"/watch",
      element:<Watchpage/>,
    }
  ],
},],)

function App() {
  return (
    <Provider store={store}>
    <div >
     <Header/>
     <RouterProvider router={approuter}/>
    </div>
    </Provider>
  );
}

export default App;
