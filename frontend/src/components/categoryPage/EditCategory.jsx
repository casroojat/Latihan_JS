import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditCategory = () => {

    const [categoryName, setCategoryName] = useState("");
    const [categoryInformation, setCategoryInformation] = useState("");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        const getCategoryById = async ()=>{
            const response = await axios.get(`http://localhost:5000/categories/${id}`);
            setCategoryName(response.data.category_name);
            setCategoryInformation(response.data.category_information);
        }
        getCategoryById();
    }, [id]);
    
    const updateCategory = async (e) =>{
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/categories/${id}`, {
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
        <form className='my-10' onSubmit={updateCategory}>
            <div className="flex flex-col">
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Category Name</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Category Name' value={categoryName} onChange={(e)=>setCategoryName(e.target.value)}/>
                </div>
                <div className="mb-5">
                    <label className="font-bold text-slate-700">Informtion</label>
                    <input type="text" className="w-full py-3 mt-1 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder='Category Information' value={categoryInformation} onChange={(e)=>setCategoryInformation(e.target.value)}/>
                </div>
                <button className='w-full py-3 font-bold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border border-indigo-500 hover:shadow' type="submit">Update</button>
            </div>
        </form>
    </div>
  )
}

export default EditCategory