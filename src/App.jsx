import {Route, Routes} from "react-router-dom";
import Home from "./views/Home.jsx";
import './assets/css/app.css';

function App() {

  return (
    <Routes>
        <Route path={'/'} element={<Home />}/>
    </Routes>
  )
}

export default App
