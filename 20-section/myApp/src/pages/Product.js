import { Link, Redirect, Route } from 'react-router-dom';
const Products = () => {
  return (
    <>
      {/* <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route> */}
      <h1>Products🛒</h1>
      <div>
        <ul>
          <li>
            <Link to="/products/laptops">Laptops</Link>
          </li>
          <li>
            <Link to="/products/mouses">Mouse</Link>
          </li>
          <li>
            <Link to="/products/keyboards">KeyBoard</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Products;
