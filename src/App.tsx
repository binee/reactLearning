import {Routes , Route } from "react-router-dom"
import {Container} from "react-bootstrap";
import  Home  from './pages/Home'
import  About  from './pages/About'
import Layout from "./components/Layout";
import Banner from "./components/Banner";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
function App() {

  return (
  <Layout>
<Routes>
  <Route path="/" element={<Home />} ></Route>
  <Route path="/product" element={<Product />} ></Route>
  <Route path="/product/:id" element={<ProductDetails />} ></Route>
  <Route path="/aboutus" element={<About />} ></Route>
</Routes>
</Layout>
  )
}

export default App
