import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='px-64 bg-gradient-to-b from-indigo-400 to-white w-screen h-screen'>
        <Header />
        <Main />
        <Footer />
    </div>
  );
}

export default App;
