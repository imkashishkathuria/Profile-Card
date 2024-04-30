import { useState } from 'react'
import { useEffect } from 'react';

export default function App() {
  const [data, setData]=useState(null);
   const [error, setError] = useState(null);
 useEffect(() => {
    const fetchData = async () => {
  const url="https://randomuser.me/api/?page=1&results=1&seed=abc";
  const options={
            method:'GET',
        };

    try {
      const res=await fetch(url,options);
      if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
      const result=await res.json();
      console.log(result.results[0]);
      setData(result.results[0]);
    } catch (error) {
      console.error('Error fetching data:', error);
        setError(error);
    }
  };
   fetchData();
  }, []);
  
   if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  // console.log("object")
  return (

    
   <div className="flex justify-center items-center h-screen" width='70px'>
   <div class="bg-black shadow-lg rounded-lg p-6" style={{ width: "800px", height: "500px" }}>

  <div
  class="flex flex-col rounded-lg bg-white text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white md:max-w-xl md:flex-row">
  <div>
  <img
    class="h-full"
    src={data.picture.large}
    width="400px"
    alt="" />
    </div>
  <div class="flex flex-col justify-start p-6">
    <h1 class="mb-2 text-blue-800 mb-4 uppercase font-semibold text-3xl underline">{data.name.title+" "}
          {data.name.first+ " "}
          {data.name.last}</h1>
    
    <div className='mb-2 font-medium text-xl'>
      <div className="mb-2">
    <span className="font-bold text-green-700">Email:</span> {data.email}
  </div>
           <div className="mb-2">
    <span className="font-bold text-green-700">Gender:</span> {data.gender}
  </div>
  <div className="mb-2">
    <span className="font-bold text-green-700">Age:</span> {data.dob.age}
  </div>
  <div className="mb-2">
    <span className="font-bold text-green-700">Date Of Birth:</span>{" "}
    {(data.dob.date).split("T")[0]}
  </div>
  <div className="mb-2">
    <span className="font-bold text-green-700">Phone:</span> {data.phone}
  </div>
  <div className="mb-2">
    <span className="font-bold text-green-700">Address:</span> {data.location.street.number + ", "+data.location.street.name + ", "+data.location.city + ", "+data.location.state + ", "+data.location.country+ " - "+data.location.postcode}
  </div>
    </div>
  </div>
</div>
</div>
</div>
  );
}