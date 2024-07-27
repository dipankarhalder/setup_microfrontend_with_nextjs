import React, { useState, useEffect } from 'react';

export default function Category() {
  const [data, setData] = useState([]);

  async function getData() {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='bg-white'>
      <div className='w-full px-6 py-4'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Categories: Jewelery
        </h2>
        {data.map((jewel: any) => (
          <div className='mt-6 flex flex-col bg-gray-100 p-4' key={jewel.id}>
            <h3 className=' text-gray-800 flex w-[100%]'>
              {jewel.title}
            </h3>
            <p>{jewel.price} &nbsp;&nbsp; - ({jewel.category})</p>
            <p>{jewel.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
