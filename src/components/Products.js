import React, { useEffect, useState } from "react";
import CardProduct from "./Card";
import style from "../resources/products.css";
import Pagination from "./Pagination";
import Spinner from "react-bootstrap/Spinner";

export default function Products(props) {
  const [prod, setProd] = useState([]);
  const [posts, setPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  const getData = async () => {
    const response = await fetch("https://cartofshoebapi.herokuapp.com/");
    const res = await response.json();
    setProd(res);
    setPosts(prod);
    setLoad(false);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = prod.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (load)
    return (
      <div className="waitin">
        <Spinner className="spinn" animation="grow" variant="danger" />
        <h2 className="waitin2">Wait till finish loadin boi...</h2>
      </div>
    );
  return (
    <div>
      <div className="produ">
        {currentPosts.map((prods) => (
          <CardProduct
            key={prods._id}
            title={prods.title}
            image={prods.imageLink}
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
