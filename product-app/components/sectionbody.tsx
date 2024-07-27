import { useState, useEffect } from 'react';

export default function SectionBody() {
  const [data, setData] = useState([]);

  async function getData() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((res) => res.json())
      .then((res) => setData(res));
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='bg-gray-200 flex'>
      <div className='text-[14px] font-medium flex items-center p-5 text-black'>
        <ul>
          {data.map((item: any) => (
            <li className='mb-4' key={item.id}>{item.id}. {item.title}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
