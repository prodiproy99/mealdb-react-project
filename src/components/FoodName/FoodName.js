import React from 'react';
import './FoodName.css'

const FoodName = (props) => {
    const {food} = props; 
    console.log(food);
    
    let name = [];
    for(const meal of food){
        name = meal.strMeal;
    }

    return (
        <div className='food-name'> 
            <h1>Food Name: {name}</h1>
        </div>
    );
};

export default FoodName;