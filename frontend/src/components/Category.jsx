import { Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { categoriesSelectors, getAllCategory } from "../features/CategorySlice";
import { useEffect, useState } from "react";
import { BsCupStraw } from "react-icons/bs";
import { FaUtensils } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { LuCakeSlice } from "react-icons/lu";
import { getProduct, getProductByCategory } from "../features/ProductSlice";

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector(categoriesSelectors.selectAll);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategory()).finally(() => setLoading(false));
  }, [dispatch]);

  function setActive(element){
    var el = document.getElementsByClassName("active");
    for(let i = 0; i < el.length; i++){
      el[i].classList.remove("active");
    }
    element.classList.add("active");
  }

  const setIcon = (kategori) => {
    if(kategori == 1){
      return <FaUtensils />;
    }else if(kategori == 2){
      return <BsCupStraw />
    }else{
      return <LuCakeSlice />
    }
  };

  const showAll = () => {
    dispatch(getProduct());
  };

  const showCategoryBy = (id) => {
    dispatch(getProductByCategory(id));
  };

  return (
    <>
      <Col md={2}>
        <h4>Product Category</h4>
        <p>{loading ? "Loading . . ." : ""}</p>
        <ListGroup key="all001">
          <ListGroup.Item id={`all001`} className="mb-1 shadow-sm" active action onClick={() => {
            setActive(document.getElementById(`all001`)),
            showAll();
          }}>
            <IoFastFoodSharp /> All Products
          </ListGroup.Item>
        </ListGroup>
        {category && category.map((item) => (
          <ListGroup key={item.id}>
            <ListGroup.Item id={`key${item.id}`} className="mb-1 shadow-sm" action onClick={() => {
              setActive(document.getElementById(`key${item.id}`)),
              showCategoryBy(item.id)
              }}>{setIcon(item.id)} {item.name}</ListGroup.Item>
          </ListGroup>
        ))}
        <hr />
      </Col>
    </>
  )
}

export default Category