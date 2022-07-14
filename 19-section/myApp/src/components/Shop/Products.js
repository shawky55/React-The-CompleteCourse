import ProductItem from './ProductItem';
import classes from './Products.module.css';
const productsData = [
  {
    id: 'p4',
    price: 5,
    title: 'my First book',
    description: 'firt book publised to me',
  },
  { id: 'p45', price: 40, title: 'keyboard', description: 'gaming keyboard' },
  { id: 'pe4', price: 20, title: 'mouse', description: 'gaming mouse' },
  { id: 'e49', price: 79, title: 'cpu', description: ' cpu' },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {productsData.map((product) => {
        return(  <ProductItem
            key={product.id}
            title={product.title}
            id={product.id}
            price={product.price}
            description={product.description}
          />)
        })}
      </ul>
    </section>
  );
};

export default Products;
