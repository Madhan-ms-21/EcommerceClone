import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import ProductCard from './customer/components/ProductCard/ProductCard';
import Product from './customer/components/Product/Product';
import ProductDetails from './customer/components/ProductDetails/ProductDetails';
import Cart from './customer/components/Cart/Cart';
import Navigation from './customer/components/Navigation/Navigation';
import Footer from './customer/components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Navigation/>
      {/* <HomePage/> */}
      {/* <ProductCard /> */}
      {/* <Product/> */}
      {/* <ProductDetails/> */}
      <Cart/>
      <Footer/>
    </div>
  );
}

export default App;
