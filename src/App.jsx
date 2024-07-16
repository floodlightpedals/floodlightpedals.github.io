import './App.css';
import About from './components/About/About';
import ComingSoon from './components/ComingSoon/ComingSoon';
import FloatingEmailButton from './components/FloatingEmailButton/FloatingEmailButton';
// import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Mods from './components/Mods/Mods';
import Pedals from './components/Pedals/Pedals';
import ProductDetail from './components/ProductDetail/ProductDetail';
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className='app'>
            {/* <Header /> */}
            <main>
                <ComingSoon />
                {/* <Routes>
                    <Route path='/' element={<About />} />
                    <Route path='/pedals' element={<Pedals />} />
                    <Route exact path='/mods' element={<Mods />} />
                    <Route path='/mods/:productKey' element={<ProductDetail />} />
                </Routes> */}
            </main>
            {/* <FloatingEmailButton /> */}
            {/* <Footer /> */}
        </div>
    );
}

export default App;
