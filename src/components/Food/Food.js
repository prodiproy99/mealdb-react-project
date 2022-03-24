import React from 'react';
import './Food.css'

const Food = (props) => {
   const {strMealThumb, strMeal, strArea, strCategory} = props.meal; 
    return (
        <div className='foods'> 
            <img src= {strMealThumb} alt=''></img>
            <div className="food-info">
                <p>Meal Name: {strMeal}</p>
                <p>Category: {strCategory}</p>
                <p>Area: {strArea}</p> 
            </div>
            <button onClick =  {() => props.handleFoodName(props.meal)} className='food-btn'>
                <p>Show Details</p>
                </button>
        </div>
    );
};

export default Food;