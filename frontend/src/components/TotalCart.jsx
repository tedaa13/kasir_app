import { Button, Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FaCartArrowDown } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { saveOrder } from '../features/CardSlice';
import Swal from 'sweetalert2';

const TotalCart = ({carts}) => {
  const dispatch = useDispatch();
  let sum = 0;
  if(carts){
    sum = carts.reduce(function(result, item){
      return result + parseInt(item.totalPrice);
    }, 0);
  };

  const saveCartData = (data) => {
    const orderData = {
      date: new Date(),
      total: sum,
      detail: data
    }
    dispatch(saveOrder(orderData));
    Swal.fire('Order Success',"","success");
  }

  return (
    <div className='fixed bottom'>
      <Row>
        <Col md={{span:20, offset:0}} className='bg-body pt-2'>
          <div className="px-3">
            <h4>
              Total Bayar: {" "}
              <strong className='float-end me-9'>
                Rp {sum.toLocaleString("id-ID")} 
              </strong>
            </h4>
            <Button variant="primary" className='w-100 me-3 mb-3' size="lg" onClick={() => saveCartData(carts)}>
            <FaCartArrowDown /> Bayar
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

TotalCart.propTypes = {
  carts: PropTypes.array,
};

export default TotalCart;