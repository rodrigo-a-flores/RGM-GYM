import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import MainPage from './Components/Main/MainPage.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Plains from './Components/Main/Plains/Plains.jsx';
import Contact from './Components/Main/Contact/Contact.jsx';
import ProductListContainer from './Components/Main/Products/ProductListContainer.jsx';
import ProductDetailsContainer from './Components/Main/Products/ProductDetailsContainer/ProductDetailsContainer.jsx';

function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/plains" element={<Plains />} />
                    <Route path="/products" element={<ProductListContainer />} />
                    <Route path="/contact" element={<Contact />} />                    
                    <Route path="/products/:id" element={<ProductDetailsContainer />} />

                    {/* Para Filtrar por categoria, debemos crear la ruta dinamica 
                    <Route path="/products/:category" element={<ProductListContainer />} />
                    */}

                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
};

export default App;
