import React, { useState } from "react";
import Navb from "./components/Navbar";
import Products from "./components/Products";

function App() {
  const [cartCount, setCartCount] = useState([0]);

  return (
    <div className="App">
      <Navb cartCount={cartCount} />
      <Products />
    </div>
  );
}

export default App;
