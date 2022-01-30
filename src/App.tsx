import React, { useEffect } from "react";
import About from "./about/About";
import "./App.css";
import Home from "./home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CustomPopup from "./custom/CustomPopup";

import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { RootState } from "./reduxStore/store";
import { initialState } from "./reduxStore/imagePopUpReducer";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const {children, show} = useSelector((state: RootState) => state.imagePopUp)

  const dispatch = useDispatch();


  const closePopup = (e: any) => {
    dispatch({ type: 'RESET', payload: initialState })
  };
  

  return (
    <div className="App">
      <Home></Home>
      <About></About>

      <CustomPopup 
      show={show} 
      onClose={closePopup} 
      children={children} />
    </div>
  );
}

export default App;
