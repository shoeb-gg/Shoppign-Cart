import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import style from "../resources/card.css";

const CardProduct = ({ desc, image }) => {
  const [count, setCount] = useState("Add to Cart");
  const handleClick = () => {
    if (count === "Add to Cart") {
      setCount(parseInt(1));
      return;
    }
    setCount(count + 1);
  };
  return (
    <div className="c">
      <Card className="text-center" className="cStyle">
        <Card.Img variant="top" src={image} className="cImg" />
        <Card.Body>
          <Card.Text className="des">{desc}</Card.Text>
        </Card.Body>
        <Button
          onClick={handleClick}
          variant="primary"
          size="sm"
          style={{ flex: "auto" }}
        >
          {count}
        </Button>
      </Card>
    </div>
  );
};
export default CardProduct;
