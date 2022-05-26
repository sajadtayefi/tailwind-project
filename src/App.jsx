import react from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingUp from "./SingUp";
import SingIn from "./SingIn";
import Home from "./Home";
import Forgot from "./Forgot"


function App(props) {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SingIn/>} />
          <Route path="/singup" element={<SingUp/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/forgot" element={<Forgot/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
