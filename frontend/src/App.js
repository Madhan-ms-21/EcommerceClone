import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductCard from './customer/components/ProductCard/ProductCard';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <ProductCard /> */}
      {/* <Product/> */}
      <ProductDetails/>
    </div>
  );
}

export default App;
