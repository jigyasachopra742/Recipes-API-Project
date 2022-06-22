import React, { useState } from 'react'
import Fooditem from './fooditem';

function Food() {
  
  const [search, setSearch] = useState("");
  const [myfood, setFood] = useState();
  
  const searchFood = async () =>
  {
  
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      const data = await response.json();
      console.log(data);
      setFood(data.meals);
      
  }
  
  

  console.log(searchFood);
  return (
    <div className="main">
        
        <div className="heading"><h1>Search the Recipe you like</h1>
            <h4>There are many delicious recipes here, just write the name in search box</h4>
        </div>

        <div className="searchBox">
            <input type="search" className="search-bar" placeholder="enter recipe name" onChange={(e)=>setSearch(e.target.value)} value= {search} ></input>
            <button onClick={searchFood} >Search</button>
        </div>

        <div className="container">
            {
              (myfood == null)? <p> Not Found </p> : myfood.map((response)=>{
                  return(
                    <Fooditem data ={response} />
                  )
              }
            )}  
        </div>
    </div>
  );
}

export default Food;