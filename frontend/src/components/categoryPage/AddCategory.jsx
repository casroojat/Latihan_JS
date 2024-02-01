import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {

    const [categoryName, setCategoryName] = useState("");
    const [categoryInformation, setCategoryInformation] = useState("");
    const navigate = useNavigate();

    const saveCategory = async (e) =>{
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/categories', {
            category_name: categoryName,
            category_information: categoryInformation
        });
        navigate('/categories');
        } catch (error) {
            console.log(error);
        }
        
    }

  return (
    <div className='max-w-lg mx-auto my-10 bg-white p-8 rounded-xl shadow shadow-slate-300'>
        <form className='my-10' onSubmit={saveCategory}>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Category Name</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Category Name' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Informtion</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Category Information' value={categoryInformation} onChange={(e)=>setCategoryInformation(e.target.value)}/>
                </div>
                <button className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border border-indigo-500 hover:shadow' type="submit">Save</button>
            </div>
        </form>
    </div>
  )
}

export default AddCategory