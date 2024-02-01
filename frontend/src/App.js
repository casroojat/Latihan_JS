import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProductList from './components/productPage/ProductList';
import AddProduct from './components/productPage/AddProduct';
import EditProduct from './components/productPage/EditProduct';
import CategoryList from './components/categoryPage/CategoryList';
import AddCategory from './components/categoryPage/AddCategory';
import EditCategory from './components/categoryPage/EditCategory';

function App() {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route path= 'products/' element={<ProductList/>}/>
          <Route path= 'products/add' element={<AddProduct/>}/>
          <Route path= 'products/edit/:id' element={<EditProduct/>}/>

          <Route path= 'categories/' element={<CategoryList/>}/>
          <Route path= 'categories/add' element={<AddCategory/>}/>
          <Route path= 'categories/edit/:id' element={<EditCategory/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
