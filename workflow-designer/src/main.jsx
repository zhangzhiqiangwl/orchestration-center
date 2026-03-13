import {createRoot} from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import './i18n';
import {polyfill} from "mobile-drag-drop";
import "mobile-drag-drop/default.css";

polyfill({
    dragImageTranslateOverride: "scrollBehavior"
})

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
        </Routes>
    </BrowserRouter>
)
