import "./App.css";
import Content from "./components/Content";
import Work from "./components/Work";
import Header from "./components/Header";
import HeaderMobile from "./components/HeaderMobile";
import { useEffect } from "react";
import { useState } from "react";
import { Otro } from "./components/Otro";
import { Skills } from "./components/Skills";
import { Skillings } from "./components/Skillings";

function App() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Creamos una función para actualizar el estado con el clientWidth
    const updateWidth = () => {
      const width = document.body.clientWidth;
      setWidth(width);
    };
    // Actualizaremos el width al montar el componente
    updateWidth();
    // Nos suscribimos al evento resize() de window
    window.addEventListener("resize", updateWidth);
  });
  return (
    <div className="App">
        {width>775 ? <Header/> : <HeaderMobile/>}
        <Content />
        <Skillings/>
        <Work/>
        
        {/* <Otro/> */}
    </div>
  );
}

export default App;
