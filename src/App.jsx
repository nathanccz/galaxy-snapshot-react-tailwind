import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
    useEffect(() => {
        Aos.init({ once: true, duration: 1400 });
      }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;