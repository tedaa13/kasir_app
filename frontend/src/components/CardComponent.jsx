import { Card, Col } from "react-bootstrap";
import PropTypes from 'prop-types';

const CardComponent = ({product, setCart}) => {
  return (
    
    <Col md={4} xs={6} className="mb-4">
      <Card className="shadow" onClick={() => setCart(product)}>
        <Card.Img variant="top" src={"/img/"+product.image} />
        <Card.Title> {product.name + " (" + product.code + ") "} </Card.Title>
        <Card.Text>Rp. {product.price}</Card.Text>
      </Card>
    </Col>
  );
};

CardComponent.propTypes = {
  product: PropTypes.object,
  setCart: PropTypes.func
};


export default CardComponent;