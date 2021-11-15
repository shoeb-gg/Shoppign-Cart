import React, { useEffect, useState } from "react";
import CardProduct from "./Card";
import style from "../resources/products.css";

export default function Products() {
  const [prod, setProd] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();
    console.log(data);
    setProd(data);
  };

  return (
    <div className="produ">
      {prod.map((prods) => (
        <CardProduct
          key={prods.title}
          title={prods.title}
          image={prods.image}
          price={prods.price}
        />
      ))}
    </div>
  );
}
