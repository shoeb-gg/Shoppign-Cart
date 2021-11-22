import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "../resources/card.css";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";

const CardProduct = ({
  title,
  image,
  price,
  updateCartCount,
  rewindCarCount,
  desc,
}) => {
  const [count, setCount] = useState("Add to Cart");
  const handleClick = () => {
    updateCartCount();
    if (count === "Add to Cart") {
      setCount(parseInt(1));
      return;
    }
    setCount(count + 1);
  };
  const redoCount = () => {
    rewindCarCount(count);
    setCount("Add to Cart");
  };
  price = 10 * Math.ceil(price);
  return (
    <div className="c">
      <div className="des">{desc}</div>
      <Card className="text-center" className="cStyle">
        <Card.Img variant="top" src={image} className="cImg" />

        <Card.Body className="txt">
          <Card.Text className="ti">{title}</Card.Text>
          <Card.Text className="pri">{price}/=</Card.Text>
        </Card.Body>

        <ButtonGroup className="">
          <Button
            className="bton"
            onClick={handleClick}
            variant="success"
            size="sm"
          >
            {count}
          </Button>
          <Button onClick={redoCount} variant="info">
            <FontAwesomeIcon icon={faRedo} className="text-white" size="lg" />
          </Button>
        </ButtonGroup>
      </Card>
    </div>
  );
};
export default CardProduct;
