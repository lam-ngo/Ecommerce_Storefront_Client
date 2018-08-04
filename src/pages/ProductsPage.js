import React from 'react';
import PropTypes from 'prop-types';
import getProductsFromContentful from '../data/Contentful.config';

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts() {
    getProductsFromContentful().then(products => {
      console.log(products);
      this.setState({
        products: products
      });
    });
  }

  render() {
    const productsList =
      this.state.products.length === 0
        ? 'loading...'
        : this.state.products.map((product, index) => (
            <Product key={index} product={product.fields} />
          ));
    return (
      <div>
        <h2>Products</h2>
        {productsList}
      </div>
    );
  }
}

const Product = ({ product }) => (
  <div style={style.container}>
    <h3>{product.name}</h3>
    <p>By {product.brand}</p>
    <p>
      <img
        src={product.image.fields.file.url}
        alt={product.image.fields.file.fileName}
      />
    </p>
    <p>{product.description}</p>
    <p>${product.price}</p>
    <button style={style.button}>Add to cart</button>
    <hr />
  </div>
);

const style = {
  container: {
    width: '400px',
    textAlign: 'center'
  },
  button: {
    height: '50px',
    width: '200px',
    fontSize: '16px',
    fontWeight: '600'
  }
};

Product.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductsPage;
