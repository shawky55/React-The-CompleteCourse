import { Link, useParams, Route, Redirect } from 'react-router-dom';

const ProductDetails = () => {
  const parma = useParams();
  const productName = parma.productName;
  console.log(productName);
  return (
    <>
      {/* <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route> */}
      <Route path="/products/laptops">
        <div>
          <h1>Detalis🔹</h1>
          <h3>Laptop Detalis</h3>
        </div>
      </Route>
      <Route path="/products/mouses">
        <div>
          <h1>Detalis🔹</h1>
          <h3>mouses Detalis</h3>
        </div>
      </Route>
      <Route path="/products/keyboards">
        <div>
          <h1>Detalis🔹</h1>
          <h3>keyboards Detalis</h3>
        </div>
      </Route>
    </>
  );
};

export default ProductDetails;
