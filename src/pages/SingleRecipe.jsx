import React, { useState } from 'react';
import { FaStar,FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import {toast } from 'react-toastify';
const SingleRecipe = ({ recipe }) => {
    const[isTrue,setIsTrue]=useState(false)
    const {recipe_name,cooking_method,rating,ingredients}=recipe;
   const ratingStar= Array.from({length:5},(e,index)=>{
        let number=index+0.5;
        return <span key={index}>
           {
            rating>=index+1?<FaStar></FaStar>:rating>=number?<FaStarHalfAlt></FaStarHalfAlt>:<AiOutlineStar></AiOutlineStar>
           }
        </span>
    })
    const listItems = []
    for(const fruit of ingredients){
        listItems.push(<li >{fruit}</li>);
    }
    const handelFavorite=()=>{
        toast.success('recipe is your favorite');
        setIsTrue(!isTrue)
    }
    return (
        <div>
            <div className="card w-full bg-gray-300 shadow-xl">

                <div className="card-body items-center text-center">
                    <h2 className="card-title">Name:{recipe_name}</h2>
                    <h2 className="card-title">Cooking:{cooking_method}</h2>
                    <h2 className="card-title">Rating:{ratingStar}</h2>
                    <h2 className="card-title">Ingredients</h2>
                    <ul>
                        {listItems}
                    </ul>
                    <div className="card-actions">
                        <button disabled={isTrue}onClick={handelFavorite} className="btn bg-red-500 border-0"> Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecipe;