import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const CategoryList = () => {
    const [category, setCategory] = useState([]);
    useEffect(()=>{
        getCategory();
    },[]);

    const getCategory = async ()=>{
        const response = await axios.get('http://localhost:5000/categories');
        setCategory(response.data);
    };
const deleteCategory = async (id)=>{
    try {
        await axios.delete(`http://localhost:5000/categories/${id}`);
        getCategory();
    } catch (error) {
        console.log();
    }
}

  return (
    <div className='flex flex-col mt-5'>
    <div className="w-full">
        <Link to="/categories/add" className='bg-green-500 hover:bg-green-700 border-slate-200 text-white font-bold py-2 px-4 rounded-lg'>Add New</Link>
        <div className="relative shaddow rounded-lg mt-3">
            <table className='w-full text-sm text-left text-gray-500'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-100'>
                    <tr>
                        <th className='py-3 px-1 text-center'>No</th>
                        <th className='py-3 px-6'>Category Name</th>
                        <th className='py-3 px-6'>Category Informtion</th>
                        <th className='py-3 px-1 text-center'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {category.map((category, index)=>(
                        <tr className='bg-white border-b' key={category.id}>
                            <td className='py-3 px-1 text-center'>{index+1}</td>
                            <td className='py-3 px-6 font-medium text-gray-900'>{category.category_name}</td>
                            <td className='py-3 px-6'>{category.category_information}</td>
                            <td className='py-3 px-1 text-center'>
                                <Link to={`/categories/edit/${category.id}`} className='font-medium bg-blue-400 hover:bg-blue-500 px-3 py-1 rounded text-white mr-1'>Edit</Link>
                                <button onClick={()=>deleteCategory(category.id)} className='font-medium bg-red-400 hover:bg-red-500 px-3 py-1 rounded text-white'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>   
        </div>
    </div>
</div>
  )
}

export default CategoryList