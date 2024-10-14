import './App.css';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import MainPage from './Components/Main/MainPage.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Plains from './Components/Main/Plains/Plains.jsx';
import Products from './Components/Main/Products/Products.jsx';
import Contact from './Components/Main/Contact/Contact.jsx';


function App() {

    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/plains" element={<Plains />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    )
};

export default App;
