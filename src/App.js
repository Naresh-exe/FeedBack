import { Routes,Route,useLocation } from 'react-router-dom';
import './App.css';
import Content from './pages/content';
import Header from './components/navBar';
import SecondComponent from './pages/content2';
import Header1 from './components/navBar2';
import ThirdComponent from './pages/content3';
import FeedBackDetail from './pages/feedBack';


function App() {
  const location=useLocation()
  const currentPath=location.pathname
  const isLandingPage=currentPath==="/feedBack"
  const isLoading=currentPath==="/"
  const isSecond=currentPath==="/second"

  return (
    <>
    {(isLandingPage&&isLoading)|| isSecond ? <Header1/>:<Header />}
    <Routes>
      <Route path='/' element={<Content />} />
      <Route path='/second' element={<SecondComponent />} />
      <Route path='/third' element={<ThirdComponent />} />
      <Route path='/feedBack' element={<FeedBackDetail />} />
    </Routes>
    </>
  )
}

export default App;
