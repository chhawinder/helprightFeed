import React, { useState, useEffect, useRef } from 'react';
import './scroll.css';
import ButtonToTop from "./buttontotop";

function Scroll() {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Load initial data
    fetchData();
  }, []);

  useEffect(() => {
    // Add scroll listener
    containerRef.current.addEventListener('scroll', handleScroll);
    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Load more data when user scrolls to bottom of container
    const container = containerRef.current;
    if (container.scrollHeight - container.scrollTop === container.clientHeight) {
      fetchData();
    }
  };

  const fetchData = async () => {
    // Fetch data from API and append it to existing data
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const newData = await response.json();
    setData([...data, ...newData]);
  };

  const handleDonate = (id) => {
    // Handle donate button click
    console.log(`Donate button clicked for item ${id}`);
  };

  const handleShare = (id) => {
    // Handle share button click
    console.log(`Share button clicked for item ${id}`);
  };


  return (
    <>
    {/* <div >
    <ButtonToTop/>
    </div> */}
    <div ref={containerRef} className="container ::-webkit-scrollbar ">
     
      {data.map((item) => (
        <div key={item.id} className="item">
        <img src={item.url} alt={`Image ${item.id}`} />
              <div className='container-1'>
          <div className="item-title">{item.title}</div>
          <div className="item-buttons">
            <button onClick={() => handleDonate(item.id)}>Donate</button>
            <button onClick={() => handleShare(item.id)}>Share</button>
          </div>

          </div>
          
        </div>
      ))}
    </div>
    </> 
  );
}

export default Scroll;