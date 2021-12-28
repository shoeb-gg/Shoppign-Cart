import React, { useEffect, useState } from "react";
import CardProduct from "./Card";
import style from "../resources/products.css";
import Pagination from "./Pagination";

export default function Products(props) {
  const [prod, setProd] = useState([]);
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    const res = await response.json();
    setProd(res);
    setPosts(prod);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = prod.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="produ">
        {currentPosts.map((prods) => (
          <CardProduct
            key={prods.title}
            title={prods.title}
            image={prods.image}
            price={prods.price}
            desc={prods.description}
            updateCartCount={props.updateCartCount}
            rewindCarCount={props.rewindCarCount}
          />
        ))}
      </div>
      <div className="pagi">
        <Pagination
          paginate={paginate}
          postsPerPage={postsPerPage}
          totalPosts={prod.length}
        />
      </div>
    </div>
  );
}
