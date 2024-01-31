import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const navigate = useNavigate();

    const saveProduct = async (e) =>{
        e.preventDefault();
        await axios.post('http://localhost:5000/products', {
            product_name: productName,
            product_price: parseInt(productPrice) 
        });
        navigate('/products');
    }

  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form className='my-10' onSubmit={saveProduct}>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Product Name</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Product Name' value={productName} onChange={(e)=>setProductName(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Price</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Price' value={productPrice} onChange={(e)=>setProductPrice(e.target.value)}/>
                </div>
                <button className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border border-indigo-500 hover:shadow' type="submit">Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddProduct