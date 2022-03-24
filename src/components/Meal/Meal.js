import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import FoodName from '../FoodName/FoodName';
import './Meal.css'

const Meal = () => {

    const [meals, setMeal] = useState([]);
    const [food, setFood] = useState([]);
    // console.log(meals);
    useEffect( () =>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    }, [])
    
    const handleFoodName = (meal) =>{ 
         console.log(meal);
        const newFood = [...food, meal]
        setFood(newFood); 
    }

    return (
        <div className='meals'>
            <div className="meal-container"> 
                {
                    meals.map(meal => <Food 
                        key = {meal.idMeal}
                        handleFoodName = {handleFoodName}
                        meal = {meal}
                    ></Food> )
                }
            </div>
            <div className="meal-name">  
                <FoodName food= {food}></FoodName>
            </div>
        </div>
    );
};

export default Meal;