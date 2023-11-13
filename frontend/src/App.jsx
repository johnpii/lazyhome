import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import ProductDetails from "./components/product-details/ProductDetails"
const App = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Home/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/product/:id" element={<ProductDetails/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App