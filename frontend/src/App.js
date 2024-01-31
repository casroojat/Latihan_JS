import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/productPage/ProductList';
import AddProduct from './components/productPage/AddProduct';
import EditProduct from './components/productPage/EditProduct';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path= 'products/' element={<ProductList/>}/>
          <Route path= 'products/add' element={<AddProduct/>}/>
          <Route path= 'products/edit/:id' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
