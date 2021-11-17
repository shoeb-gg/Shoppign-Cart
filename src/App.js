import React, { useState } from "react";
import Navb from "./components/Navbar";
import Products from "./components/Products";

function App() {
  let [cartCount, setCartCount] = useState(0);
  const updateCartCount = () => {
    setCartCount(cartCount + 1);
    console.log(cartCount);
  };

  const rewindCarCount = (rewindCount) => {
    setCartCount(cartCount - rewindCount);
  };

  return (
    <div className="App">
      <Navb cartCount={cartCount} />
      <Products
        updateCartCount={updateCartCount}
        rewindCarCount={rewindCarCount}
      />
    </div>
  );
}

export default App;
