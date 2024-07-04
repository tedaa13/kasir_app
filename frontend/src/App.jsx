import { Row } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import Category from "./components/Category";
import ProductDetail from "./components/ProductDetail";
import Order from "./components/Order";

function App() {
  return (
    <>
      <NavbarComponent />
      <div className="container-fluid mt-3">
        <Row>
          <Category />
          <ProductDetail />
          <Order />
        </Row>
      </div>
    </>
  )
}

export default App
