import { Routes, Route} from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Semestr from '../Semestr/Semestr';
import Teacher from '../Teacher/Teacher';
import Map from '../Map/Map';
import Footer from '../Footer/Footer';

import './App.css';


function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/semestr" element={<Semestr />}/>
                <Route exact path="/semestr/teacher/:id" element={<Teacher />}/>
                <Route exact path="map" element={<Map />}/>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
