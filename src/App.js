import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Part2 from './components/Part2';


const routing = createBrowserRouter([
  { 
      path: '/',
   element: <Main />
  },
  {
      path: '/2',
      element: <Part2 />
  }
])
function App() {
  return (
    <div className='px-64 bg-gradient-to-b from-indigo-400 to-white w-screen h-screen'>
        <Header />
        <RouterProvider router={routing}/>
        <Footer />
    </div>
  );
}

export default App;
