import './App.css';
import Home from "./pages/Home";
import './styles/main.css'
import {Routes, Route} from 'react-router-dom';
import {Router} from "./routes/routes";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header name="Vadim" email="lljytnik@gmail.com"/>
            <Routes>
                {Router.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component/>}/>
                )}
                <Route path="*" element={<div>NotFound</div>}/>
            </Routes>
        </div>
    );
}

export default App;
