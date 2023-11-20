import {Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import './assets/css/app.css';
import Pokemon from "./views/Pokemon.jsx";

function App() {

  return (
    <Routes>
        <Route path={'/'} element={<Home />}/>
        <Route path={'/pokemon/:name'} element={<Pokemon />}/>
    </Routes>
  )
}

export default App
